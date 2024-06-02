import createRound from "../internal/createRound";
/**
 * `number`를`precision`로 내림하여 계산한다.
 *
 * @category Math
 * @param {number} number 내림하는 숫자.
 * @param {number} [precision=0] 내림을 위한 정밀도.
 * @returns {number} 내림한 숫자를 반환한다.
 * @example
 *
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 *
 * floor(4060, -2)
 * // => 4000
 */
const floor: (n: number, precision?: number) => number = createRound("floor");

export default floor;
