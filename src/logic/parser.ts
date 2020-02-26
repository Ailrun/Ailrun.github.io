import Parsimmon from 'parsimmon';

import {
  LogicBinaryExpression,
  LogicBinaryOperator,
  LogicExpression,
  LogicExpressionTypes,
  LogicProof,
  LogicPropositionExpression,
  LogicReferenceExpression,
  LogicStatement,
  LogicUnaryExpression,
  LogicUnaryOperator,
} from './types';

const expressionToken = <T>(p: Parsimmon.Parser<T>): Parsimmon.Parser<T> => {
  return p.skip(Parsimmon.regexp(/ */));
};

const unaryOperator = (Parsimmon.string('~') as Parsimmon.Parser<LogicUnaryOperator>)
  .thru(expressionToken)
  .desc('unary operator');
const binaryOperator = (Parsimmon.regexp(/\/\\|\\\/|->/) as Parsimmon.Parser<LogicBinaryOperator>)
  .thru(expressionToken)
  .desc('binary operators');

const propositionExpression = Parsimmon.regexp(/[a-zA-Z_'][a-zA-Z0-9_']*/)
  .map((identifier): LogicPropositionExpression => ({
    logicExpressionType: LogicExpressionTypes.LOGIC_PROPOSITION,
    identifier,
  }))
  .thru(expressionToken)
  .desc('proposition');

const referenceExpression = Parsimmon.digit.atLeast(1).tie()
  .map((lineNumberString): LogicReferenceExpression => ({
    logicExpressionType: LogicExpressionTypes.LOGIC_REFERENCE,
    lineNumber: parseInt(lineNumberString, 10),
  }))
  .thru(expressionToken)
  .desc('line reference');

const atomicExpression = Parsimmon.lazy(() => {
  return Parsimmon.alt(
    propositionExpression,
    referenceExpression,
    expression.wrap(Parsimmon.string('('), Parsimmon.string(')')),
  );
});

const unaryExpression = Parsimmon.lazy(() => {
  return Parsimmon.alt(
    Parsimmon.seqMap(
      unaryOperator,
      atomicExpression,
      (operator, operand): LogicUnaryExpression => ({
        logicExpressionType: LogicExpressionTypes.LOGIC_UNARY,
        operator,
        operand,
      }),
    ),
    atomicExpression
  );
})
  .thru(expressionToken);

const binaryExpression = Parsimmon.lazy(() => {
  return Parsimmon.alt(
    Parsimmon.seqMap(
      unaryExpression,
      binaryOperator,
      unaryExpression,
      (operand0, operator, operand1): LogicBinaryExpression => ({
        logicExpressionType: LogicExpressionTypes.LOGIC_BINARY,
        operator,
        operands: [operand0, operand1],
      }),
    ),
    unaryExpression,
  );
})
  .thru(expressionToken);

const expression: Parsimmon.Parser<LogicExpression> = Parsimmon.alt(
  binaryExpression,
)
  .thru(expressionToken);

const separator = Parsimmon.string('|')
  .thru(expressionToken);

const method = Parsimmon.regexp(/[^\s].+/m)
  .desc('method');

const statement = Parsimmon.seqMap(
  expression.skip(separator),
  method,
  (expression, method): LogicStatement => ({
    expression,
    method,
  }),
)
  .thru(expressionToken);

const proof = Parsimmon.sepBy(statement, Parsimmon.newline.many())
  .map((statements): LogicProof => ({
    statements,
  }))
  .skip(Parsimmon.optWhitespace);

export const parse = (text: string): LogicProof | Error => {
  const result = proof.parse(text);

  if (!result.status) {
    return new Error(`${result.index.line}, ${result.index.column}: Expected one of the follows:
  ${result.expected.join('\n  ')}`);
  }

  return result.value;
};
