import getTag from "../internal/getTag";

/**
 * `value`가 원시 `Symbol`또는 `object`로 분류되는지 확인한다.
 *
 *
 * @category Lang
 * @param {*} value 확인하기 위한 값.
 * @returns {boolean} `symbol`이면 `true`를 아니면 `false`를 반환한다.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
const isSymbol = (value: unknown) => {
  const type = typeof value;
  return (
    type === "symbol" || (type === "object" && value != null && getTag(value) === "[object Symbol]")
  );
};

export default isSymbol;
