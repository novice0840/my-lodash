import createMathOperation from "../internal/createMathOperation";

/**
 * 두 숫자를 더한다.
 *
 *
 * @category Math
 * @param {number} augend 덧셈의 첫 번째 숫자.
 * @param {number} addend 덧셈의 두 번째 숫자.
 * @returns {number} 총합을 반환한다.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
const add: (augend: number, addend: number) => number = createMathOperation(
  (augend: number, addend: number) => augend + addend,
  0
);

export default add;
