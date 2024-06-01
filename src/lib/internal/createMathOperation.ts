/**
 * 두 값에 수학적 연산을 수행하는 함수를 만든다.
 *
 * @private
 * @param {Function} operator 연산을 수행하는 함수.
 * @param {number} [defaultValue] `undefined` 인자를 위해 사용되는 값.
 * @returns {Function} 새 수학적 연산 함수를 반환한다.
 */
const createMathOperation = (operator: Function, defaultValue: number) => {
  return (value: unknown, other: unknown) => {
    if (value == undefined && other == undefined) {
      return defaultValue;
    }
    if (value !== undefined && other == undefined) {
      return value;
    }
    if (other !== undefined && value == undefined) {
      return other;
    }

    if (typeof value === "string" || typeof other === "string") {
      value = String(value);
      other = String(other);
    } else {
      value = Number(value);
      other = Number(other);
    }

    return operator(value, other);
  };
};

export default createMathOperation;
