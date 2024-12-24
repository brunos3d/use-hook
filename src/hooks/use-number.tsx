import { useState, useCallback } from 'react';

/**
 * A custom hook that provides a number state with utility functions to manipulate it.
 *
 * @param {number} [initialValue=0] - The initial value of the number state (default `0`).
 * @returns {[
 *   value: number,
 *   setValue: React.Dispatch<React.SetStateAction<number>>,
 *   increment: (step?: number) => void,
 *   decrement: (step?: number) => void,
 *   multiply: (factor: number) => void,
 *   divide: (divisor: number) => void,
 *   reset: () => void,
 *   setMin: (min: number) => void
 *   setMax: (max: number) => void
 * ]}
 * An array/tuple containing:
 * - `value`: The current number state.
 * - `setValue`: A function to set the state.
 * - `increment`: A function to increment the state by a given step.
 * - `decrement`: A function to decrement the state by a given step.
 * - `multiply`: A function to multiply the state by a given factor.
 * - `divide`: A function to divide the state by a given divisor.
 * - `reset`: A function to reset the state to the initial value.
 * - `setMin`: A function to set the state to the maximum of the current state and a given minimum value.
 * - `setMax`: A function to set the state to the minimum of the current state and a given maximum value.
 */
export const useNumber = (
  initialValue: number = 0
): [
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  increment: (step?: number) => void,
  decrement: (step?: number) => void,
  multiply: (factor: number) => void,
  divide: (divisor: number) => void,
  reset: () => void,
  setMin: (min: number) => void,
  setMax: (max: number) => void
] => {
  const [value, setValue] = useState<number>(initialValue);

  const increment = useCallback((step: number = 1) => {
    setValue((prev) => prev + step);
  }, []);

  const decrement = useCallback((step: number = 1) => {
    setValue((prev) => prev - step);
  }, []);

  const multiply = useCallback((factor: number) => {
    setValue((prev) => prev * factor);
  }, []);

  const divide = useCallback((divisor: number) => {
    if (divisor === 0) return;
    setValue((prev) => prev / divisor);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  const setMin = useCallback((min: number) => {
    setValue((prev) => Math.max(prev, min));
  }, []);

  const setMax = useCallback((max: number) => {
    setValue((prev) => Math.min(prev, max));
  }, []);

  return [value, setValue, increment, decrement, multiply, divide, reset, setMin, setMax] as const;
};
