import { useState, useCallback } from 'react';

/**
 * A custom hook that provides an object state with utility functions to manipulate it.
 *
 * @template T - The type of the object.
 * @param {T} initialValue - The initial value of the object state.
 * @returns {[
 *   value: T,
 *   setValue: React.Dispatch<React.SetStateAction<T>>,
 *   setProperty: <K extends keyof T>(key: K, newValue: T[K]) => void,
 *   removeProperty: <K extends keyof T>(key: K) => void,
 *   clear: () => void,
 *   reset: () => void,
 *   merge: (newObject: Partial<T>) => void
 * ]}
 * An array/tuple containing:
 * - `value`: The current object state.
 * - `setValue`: A function to set the state.
 * - `setProperty`: A function to set a property of the object.
 * - `removeProperty`: A function to remove a property from the object.
 * - `clear`: A function to clear the object.
 * - `reset`: A function to reset the object to the initial value.
 * - `merge`: A function to merge a new object into the current state.
 */
export const useObject = <T extends object>(
  initialValue: T
): [
  value: T,
  setValue: React.Dispatch<React.SetStateAction<T>>,
  setProperty: <K extends keyof T>(key: K, newValue: T[K]) => void,
  removeProperty: <K extends keyof T>(key: K) => void,
  clear: () => void,
  reset: () => void,
  merge: (newObject: Partial<T>) => void
] => {
  const [value, setValue] = useState<T>(initialValue);

  const setProperty = useCallback(<K extends keyof T>(key: K, newValue: T[K]) => {
    setValue((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  }, []);

  const removeProperty = useCallback(<K extends keyof T>(key: K) => {
    setValue((prev) => {
      const newValue = { ...prev };
      delete newValue[key];
      return newValue;
    });
  }, []);

  const clear = useCallback(() => {
    setValue({} as T);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  const merge = useCallback((newObject: Partial<T>) => {
    setValue((prev) => ({
      ...prev,
      ...newObject,
    }));
  }, []);

  return [value, setValue, setProperty, removeProperty, clear, reset, merge] as const;
};
