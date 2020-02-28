export interface LogicProof {
  readonly statements: LogicStatement[];
}

export interface LogicStatement {
  readonly expression: LogicExpression;
  readonly method: LogicMethod;
}

export type LogicExpression =
  | LogicPropositionExpression
  | LogicReferenceExpression
  | LogicUnaryExpression
  | LogicBinaryExpression
;

export interface LogicPropositionExpression extends BaseLogicExpression {
  readonly logicExpressionType: LogicExpressionTypes.LOGIC_PROPOSITION;
  readonly identifier: string;
}

export interface LogicReferenceExpression extends BaseLogicExpression {
  readonly logicExpressionType: LogicExpressionTypes.LOGIC_REFERENCE;
  readonly lineNumber: number;
}

export interface LogicUnaryExpression extends BaseLogicExpression {
  readonly logicExpressionType: LogicExpressionTypes.LOGIC_UNARY;
  readonly operator: LogicUnaryOperator;
  readonly operand: LogicExpression;
}

export interface LogicBinaryExpression extends BaseLogicExpression {
  readonly logicExpressionType: LogicExpressionTypes.LOGIC_BINARY;
  readonly operator: LogicBinaryOperator;
  readonly operands: [LogicExpression, LogicExpression];
}

interface BaseLogicExpression {
  readonly logicExpressionType: LogicExpressionTypes;
}

export enum LogicExpressionTypes {
  LOGIC_PROPOSITION = 'LOGIC_PROPOSITION',
  LOGIC_REFERENCE = 'LOGIC_REFERENCE',
  LOGIC_UNARY = 'LOGIC_UNARY',
  LOGIC_BINARY = 'LOGIC_BINARY',
}

export type LogicUnaryOperator = '~';

export type LogicBinaryOperator = '/\\' | '\\/' | '->';

export type LogicMethod =
  | string
;
