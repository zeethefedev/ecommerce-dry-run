export const checkIncludeText = (string, seachText) => {
  return string.toLowerCase().includes(seachText);
};

export const checkArrayIncludeText = (array, seachText) => {
  const arrayLower = array.map((str) => str.toLowerCase());
  return arrayLower.some((str) => str.includes(seachText));
};
