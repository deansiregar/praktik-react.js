import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Pass function to useState for lazy initialization
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
      
      setValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [value, setStoredValue];
}

export default useLocalStorage;