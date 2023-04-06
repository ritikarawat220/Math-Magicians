import operate from '../logic/operate';

describe('Test the operate file', () => {
  test('It cannot be divided by zero', () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('It sums between two numbers', () => {
    expect(operate(15, 5, '+')).toBe('20');
  });

  test('It subtracts between two numbers', () => {
    expect(operate(15, 5, '-')).toBe('10');
  });
  
  test('It divides an integers', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  test('It performs modulus on two numbers', () => {
    expect(operate(14, 5, '%')).toBe('4');
  });

  test('It multiplies between two numbers', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });
});