import { isSymbol } from "../lang";

const symbolToString = Symbol.prototype.toString;

const baseToString = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return `${value.map(baseToString)}`;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  const result = `${value}`;
  // value가 -0인 경우와 0인 경우를 구분
  if (typeof value === "number") {
    return result === "0" && 1 / value === -Infinity ? "-0" : result;
  }
  return result;
};

export default baseToString;
