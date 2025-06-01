export const getFromLS = (key: string): string => {
  return localStorage.getItem(key) ?? "";
};

export const setToLS = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getAvailableColors = (): string[] => {
  const availableColors = ["zinc", "slate", "stone", "gray", "neutral", "red", "rose", "orange", "green", "blue", "yellow", "violet", "purple", "pink", "brown"];
  return availableColors;
};
