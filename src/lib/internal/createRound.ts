type MethodName = "floor" | "round" | "ceil";

/**
 * `round`와 같은 함수를 만든다.
 *
 * @private
 * @param {string} methodName 라운딩 시 사용되는 `Math` 메소드의 이름.
 * @returns {Function} 새 round 함수를 반환한다.
 */
const createRound = (methodName: MethodName) => {
  const func = Math[methodName];
  return (number: number, precision?: number) => {
    precision =
      precision == null ? 0 : precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292);

    if (precision) {
      let pair = `${number}e`.split("e");
      const value = func(Number(`${pair[0]}e${+pair[1] + precision}`));

      pair = `${value}e`.split("e");
      return +`${pair[0]}e${+pair[1] - precision}`;
    }

    return func(number);
  };
};

export default createRound;
