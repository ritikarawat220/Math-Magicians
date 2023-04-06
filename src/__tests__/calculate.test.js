import calculate from '../logic/calculate';

describe('calculate', () => {
  const operation = {
    total: null,
    next: null,
    operation: null,
  };

  test('operation set to null when buttonName is AC', () => {
    expect(calculate(operation, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('When pressed a number it updates next value', () => {
    expect(calculate(operation, '5')).toEqual({
      total: null,
      next: '5',
    });
  });

  test('It updates next value with a previous one', () => {
    Object.assign(operation, calculate(operation, '1'));
    expect(calculate(operation, '5')).toEqual({
      next: '15',
      total: null,
    });
  });

  test('It should update next with a number', () => {
    Object.assign(operation, calculate(operation, '5'));
    expect(calculate(operation, '+')).toEqual({
      next: null,
      operation: '+',
      total: '15',
    });
  });

  test('It gets a value after an operation being pressed', () => {
    Object.assign(operation, calculate(operation, '+'));
    expect(calculate(operation, '9')).toEqual({
      next: '9',
      total: '15',
      operation: '+',
    });
  });

  test('It sums the operation', () => {
    Object.assign(operation, calculate(operation, '9'));
    expect(calculate(operation, '=')).toEqual({
      total: '24',
      next: null,
      operation: null,
    });
  });

  test('It substracts the operation', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    Object.assign(operation, calculate(operation, '-'));
    Object.assign(operation, calculate(operation, '5'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      operation: null,
      total: '3',
    });
  });

  test('It multiply the operation', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    Object.assign(operation, calculate(operation, 'x'));
    Object.assign(operation, calculate(operation, '5'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      operation: null,
      total: '40',
    });
  });

  test('It does the multiplication operation', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    Object.assign(operation, calculate(operation, '÷'));
    Object.assign(operation, calculate(operation, '2'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      operation: null,
      total: '4',
    });
  });

  test('It does the modulus', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    Object.assign(operation, calculate(operation, '%'));
    Object.assign(operation, calculate(operation, '2'));
    expect(calculate(operation, '=')).toEqual({
      next: null,
      operation: null,
      total: '0',
    });
  });

  test('It does the minus value', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    expect(calculate(operation, '+/-')).toEqual({
      next: '-8',
      operation: null,
      total: null,
    });
  });

  test('It does the decimal values', () => {
    Object.assign(operation, calculate(operation, 'AC'));
    Object.assign(operation, calculate(operation, '8'));
    expect(calculate(operation, '.')).toEqual({
      next: '8.',
      operation: null,
      total: null,
    });
  });
});
