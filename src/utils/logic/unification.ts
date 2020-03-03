import {
  LogicBinaryExpression,
  LogicExpression,
  LogicExpressionTypes,
  LogicPropositionExpression,
  LogicReferenceExpression,
  LogicUnaryExpression,
} from './types';

export const isNaivelyUnifiable = (sourceExpr: LogicExpression, targetExpr: LogicExpression): boolean => {
  const constraints: [string, LogicExpression][] = [];
  const stack: [LogicExpression, LogicExpression][] = [[sourceExpr, targetExpr]];

  let stackEntry = stack.pop();
  while (stackEntry !== undefined) {
    const [sExpr, tExpr] = stackEntry;

    switch (sExpr.logicExpressionType) {
      case LogicExpressionTypes.LOGIC_PROPOSITION: {
        constraints.push([sExpr.identifier, tExpr]);
        break;
      }
      case LogicExpressionTypes.LOGIC_REFERENCE: {
        if (tExpr.logicExpressionType === sExpr.logicExpressionType
            && sExpr.lineNumber === tExpr.lineNumber) {
          break;
        }
        return false;
      }
      case LogicExpressionTypes.LOGIC_UNARY: {
        if (tExpr.logicExpressionType === sExpr.logicExpressionType
            /* This is necessary to be future-proof */
            /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
            && sExpr.operator === tExpr.operator) {
          stack.push([sExpr.operand, tExpr.operand]);
          break;
        }

        return false;
      }
      case LogicExpressionTypes.LOGIC_BINARY: {
        if (tExpr.logicExpressionType === sExpr.logicExpressionType
            && sExpr.operator === tExpr.operator) {
          stack.push([sExpr.operands[0], tExpr.operands[0]]);
          stack.push([sExpr.operands[1], tExpr.operands[1]]);
          break;
        }

        return false;
      }
    }

    stackEntry = stack.pop();
  }

  const constrainedAssignment: Record<string, LogicExpression | undefined> = {};

  for (const [identifier, expr] of constraints) {
    const assigned = constrainedAssignment[identifier];
    if (assigned === undefined) {
      constrainedAssignment[identifier] = expr;
    } else if (!equal(assigned, expr)) {
      return false;
    }
  }

  return true;
};

export const equal = (expr0: LogicExpression, expr1: LogicExpression): boolean => {
  if (expr0.logicExpressionType !== expr1.logicExpressionType) {
    return false;
  }

  switch (expr0.logicExpressionType) {
    case LogicExpressionTypes.LOGIC_PROPOSITION:
      return expr0.identifier === (expr1 as LogicPropositionExpression).identifier;
    case LogicExpressionTypes.LOGIC_REFERENCE:
      return expr0.lineNumber === (expr1 as LogicReferenceExpression).lineNumber;
    case LogicExpressionTypes.LOGIC_UNARY:
      /* This is necessary to be future-proof */
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
      return expr0.operator === (expr1 as LogicUnaryExpression).operator
        && expr0.operand === (expr1 as LogicUnaryExpression).operand;
    case LogicExpressionTypes.LOGIC_BINARY:
      return expr0.operator === (expr1 as LogicBinaryExpression).operator
        && expr0.operands[0] === (expr1 as LogicBinaryExpression).operands[0]
        && expr0.operands[1] === (expr1 as LogicBinaryExpression).operands[1];
  }
};
