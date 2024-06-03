const maskAll = (str: string) => {
  return str.replace(/./g, "*");
};

const isKoreanName = (name: string) => {
  return /[가-힣]{2,}/.test(name);
};

const maskExceptForEdge = (text: string, edgeSize: number) => {
  return (
    text.slice(0, edgeSize) +
    text
      .slice(edgeSize, text.length - edgeSize)
      .replace(/[a-zA-Z가-힣]/g, "*") +
    text.slice(text.length - edgeSize, text.length)
  );
};

const maskName = (name: string) => {
  if (isKoreanName(name)) {
    switch (name.length) {
      case 2:
        return name.replace(/([가-힣])([가-힣]+)/, "$1*");
      default:
        return maskExceptForEdge(name, 1);
    }
  } else {
    if (name.length < 3) {
      return name;
    }

    const unmaskedSideSize = name.length < 6 ? 1 : 2;
    return maskExceptForEdge(name, unmaskedSideSize);
  }
};

const isHyphenSeparated = (phoneNumber: string) => {
  return /^\d{2,3}-\d{3,4}-\d{4}$/.test(phoneNumber);
};

const isSeoulPhoneNumber = (phoneNumber: string) => {
  return /^02\d+$/.test(phoneNumber);
};

const maskPhoneNumber = (phoneNumber: string) => {
  if (isHyphenSeparated(phoneNumber)) {
    return phoneNumber.replace(
      /^(\d{2,3})-(\d{3,4})-(\d{4})$/,
      (_, p1, p2, p3) => `${p1}-${maskAll(p2)}-${p3}`
    );
  }
  if (isSeoulPhoneNumber(phoneNumber)) {
    return phoneNumber.replace(
      /^02(\d{3,4})(\d{4})/,
      (_, p1, p2) => `02${maskAll(p1)}${p2}`
    );
  }

  return phoneNumber.replace(
    /^(\d{3})(\d{3,4})(\d{4})/,
    (_, p1, p2, p3) => `${p1}${maskAll(p2)}${p3}`
  );
};

export const Masker = {
  maskName,
  maskPhoneNumber,
};
