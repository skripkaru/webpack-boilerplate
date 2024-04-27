export const setToLS = (key, value) => {
  if (typeof localStorage === 'undefined') {
    throw new Error('localStorage is not supported');
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(`Error saving to localStorage: ${error.message}`);
  }
};
