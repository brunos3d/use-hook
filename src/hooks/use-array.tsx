import { useState, useCallback } from 'react';

/**
 * A custom hook that provides an array state with utility functions to manipulate it.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} [initialValue=[]] - The initial value of the array state (default `[]`).
 * @returns {[
 *   value: T[],
 *   setValue: React.Dispatch<React.SetStateAction<T[]>>,
 *   push: (item: T) => void,
 *   pop: () => void,
 *   shift: () => void,
 *   unshift: (item: T) => void,
 *   clear: () => void,
 *   reset: () => void
 * ]}
 * An array/tuple containing:
 * - `value`: The current array state.
 * - `setValue`: A function to set the state.
 * - `push`: A function to add an item to the end of the array.
 * - `pop`: A function to remove the last item from the array.
 * - `shift`: A function to remove the first item from the array.
 * - `unshift`: A function to add an item to the beginning of the array.
 * - `clear`: A function to clear the array.
 * - `reset`: A function to reset the array to the initial value.
 */
export const useArray = <T,>(
  initialValue: T[] = []
): [
  value: T[],
  setValue: React.Dispatch<React.SetStateAction<T[]>>,
  push: (item: T) => void,
  pop: () => void,
  shift: () => void,
  unshift: (item: T) => void,
  clear: () => void,
  reset: () => void
] => {
  const [value, setValue] = useState<T[]>(initialValue);

  const push = useCallback((item: T) => {
    setValue((prev) => [...prev, item]);
  }, []);

  const pop = useCallback(() => {
    setValue((prev) => prev.slice(0, -1));
  }, []);

  const shift = useCallback(() => {
    setValue((prev) => prev.slice(1));
  }, []);

  const unshift = useCallback((item: T) => {
    setValue((prev) => [item, ...prev]);
  }, []);

  const clear = useCallback(() => {
    setValue([]);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue, push, pop, shift, unshift, clear, reset] as const;
};
