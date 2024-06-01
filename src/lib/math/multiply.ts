import createMathOperation from "../internal/createMathOperation";

/**
 * 두 수를 곱한다.
 *
 * @category Math
 * @param {number} multiplier 곱셈의 첫 번째 숫자.
 * @param {number} multiplicand 곱셈의 두 번째 숫자.
 * @returns {number} 곱을 반환한다.
 * @example
 *
 * multiply(6, 4)
 * // => 24
 */
const multiply: (multiplier: number, multiplicand: number) => number = createMathOperation(
  (multiplier: number, multiplicand: number) => multiplier * multiplicand,
  1
);

export default multiply;
