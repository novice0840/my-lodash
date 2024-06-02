import createRound from "../internal/createRound";

/**
 * 'number'를 'precision'로 반올림하여 계산합니다. (반올림: 주어진 숫자보다 크거나 같은 가장 작은 정수).
 *
 * @category Math
 * @param {number} number 올림하는 숫자.
 * @param {number} [precision=0] 올림하는 정밀도.
 * @returns {number} 올림된 숫자를 반환합니다.
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
const ceil: (n: number, precision?: number) => number = createRound("ceil");

export default ceil;
