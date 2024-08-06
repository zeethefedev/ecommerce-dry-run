export const checkIncludeText = (string, seachText) => {
  return string.toLowerCase().includes(seachText);
};

export const checkArrayIncludeText = (array, seachText) => {
  const arrayLower = array.map((str) => str.toLowerCase());
  return arrayLower.some((str) => str.includes(seachText));
};

export const clearStorage = (key) => {
  if (key) {
    sessionStorage.removeItem(key);
  } else {
    sessionStorage.clear();
  }
};

export const getFromStorage = (key) => {
  const item = window.sessionStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
};

export const saveToStorage = (key, item) => {
  window.sessionStorage.setItem(key, JSON.stringify(item));
};
