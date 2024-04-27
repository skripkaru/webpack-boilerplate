export const getFromLS = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    throw new Error(`Error loading from localStorage: ${error.message}`);
  }
};
