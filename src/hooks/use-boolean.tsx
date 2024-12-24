import { useState, useCallback, Dispatch, SetStateAction } from 'react';

/**
 * A custom hook that provides a boolean state with utility functions to manipulate it.
 *
 * @param {boolean} [initialValue=false] - The initial value of the boolean state (default `false`).
 * @returns {[
 *   value: boolean,
 *   setValue: Dispatch<SetStateAction<boolean>>,
 *   setTrue: () => void,
 *   setFalse: () => void,
 *   toggle: () => void,
 *   reset: () => void
 * ]}
 * An array/tuple containing:
 * - `value`: The current boolean state.
 * - `setValue`: A function to set the state.
 * - `setTrue`: A function to set the state to true.
 * - `setFalse`: A function to set the state to false.
 * - `toggle`: A function to toggle the state.
 * - `reset`: A function to reset the state to the initial value.
 */
export const useBoolean = (
  initialValue: boolean = false
): [
  value: boolean,
  setValue: Dispatch<SetStateAction<boolean>>,
  setTrue: () => void,
  setFalse: () => void,
  toggle: () => void,
  reset: () => void
] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return [value, setValue, setTrue, setFalse, toggle, reset] as const;
};
