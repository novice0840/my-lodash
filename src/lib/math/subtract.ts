import createMathOperation from "../internal/createMathOperation";

/**
 * 두 수를 뺀다.
 *
 * @category Math
 * @param {number} minuend 뺼셈의 첫 번째 숫자.
 * @param {number} subtrahend 뺄셈의 두 번째 숫자.
 * @returns {number} 차이를 반환한다.
 * @example
 *
 * subtract(6, 4)
 * // => 2
 */
const subtract: (minuend: number, subtrahend: number) => number = createMathOperation(
  (minuend: number, subtrahend: number) => minuend - subtrahend,
  0
);

export default subtract;
