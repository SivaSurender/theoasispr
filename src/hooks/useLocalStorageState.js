import { useState, useEffect } from "react";

/**
 *
 * @template T
 * @param {T} initialState - Initial state value.
 * @param {string} key - Key to identify the localStorage entry.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} - Tuple containing state value and setter function.
 */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error(
        `Error retrieving state from localStorage: ${error.message}`
      );
      return initialState;
    }
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error storing state to localStorage: ${error.message}`);
    }
  }, [value, key]);

  return [value, setValue];
}
