import createMathOperation from "../internal/createMathOperation";

/**
 * 두 숫자를 나눈다.
 *
 * @category Math
 * @param {number} dividend 나눗셈에 사용되는 첫 번째 숫자.
 * @param {number} divisor 나눗셈에 사용되는 두 번째 숫자.
 * @returns {number} 몫을 반환한다.
 * @example
 *
 * divide(6, 4)
 * // => 1.5
 */
const divide: (dividend: number, divisor: number) => number = createMathOperation(
  (dividend: number, divisor: number) => dividend / divisor,
  1
);

export default divide;
