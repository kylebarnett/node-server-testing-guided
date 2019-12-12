const calcuator = require('../calculator.js');

describe('do the mathematical functions', () => {
  test('add numbers', () => {
    let valA = 2;
    let valB = 2;
    let expectedResult = 4;
    let result = calcuator.add(valA, valB)
    expect(result).toBe(expectedResult)
  })

  test('subtract numbers', () => {
    let valA = 2;
    let valB = 2;
    let expectedResult = 0;
    let result = calcuator.subtract(valA, valB)
    expect(result).toBe(expectedResult)
  })

  test('multiply numbers', () => {
    let valA = 2;
    let valB = 2;
    let expectedResult = 4;
    let result = calcuator.multiply(valA, valB)
    expect(result).toBe(expectedResult)
  })

  test('divide numbers', () => {
    let valA = 2;
    let valB = 2;
    let expectedResult = 1;
    let result = calcuator.divide(valA, valB)
    expect(result).toBe(expectedResult)
  })
})
