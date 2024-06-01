import { isSymbol } from "../lang";

/**
 *
 *
 * @private
 * @param {*} value 처리하는 값.
 * @returns {number} 숫자를 반환한다.
 */
const baseToNumber = (value: unknown) => {
  if (typeof value === "number") {
    return value;
  }

  if (isSymbol(value)) {
    return NaN;
  }

  return Number(value);
};

export default baseToNumber;
