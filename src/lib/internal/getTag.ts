const toString = Object.prototype.toString;

/**
 * `value`의 `toStringTag`를 얻는다.
 *
 * @private
 * @param {*} value 쿼리를 위한 값.
 * @returns {string} `toStringTag`를 반환한다.
 */
const getTag = (value: unknown) => {
  return toString.call(value);
};

export default getTag;
