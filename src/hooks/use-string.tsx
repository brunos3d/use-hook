import { useState, useCallback } from 'react';

/**
 * A custom hook that provides a string state with utility functions to manipulate it.
 *
 * @param {string} [initialValue=''] - The initial value of the string state (default `''`).
 * @returns {[
 *   value: string,
 *   setValue: React.Dispatch<React.SetStateAction<string>>,
 *   transform: (type: StringTransformType) => void,
 *   reset: () => void
 * ]}
 * An array/tuple containing:
 * - `value`: The current string state.
 * - `setValue`: A function to set the state.
 * - `transform`: A function to transform the string state based on the specified type.
 * - `reset`: A function to reset the state to the initial value.
 */
export type StringTransformType = 'lowercase' | 'uppercase' | 'capitalize' | 'pascal-case' | 'camel-case' | 'kebab-case' | 'snake-case';

export const useString = (
  initialValue: string = ''
): [value: string, setValue: React.Dispatch<React.SetStateAction<string>>, transform: (type: StringTransformType) => void, reset: () => void] => {
  const [value, setValue] = useState<string>(initialValue);

  const transform = useCallback((type: StringTransformType) => {
    switch (type) {
      case 'lowercase':
        setValue((prev) => prev.toLowerCase());
        break;
      case 'uppercase':
        setValue((prev) => prev.toUpperCase());
        break;
      case 'capitalize':
        setValue((prev) => prev.charAt(0).toUpperCase() + prev.slice(1));
        break;
      case 'pascal-case':
        setValue((prev) =>
          prev
            .split(/[-_\s]+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('')
        );
        break;
      case 'camel-case':
        setValue((prev) =>
          prev
            .split(/[-_\s]+/)
            .map((word, index) => (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)))
            .join('')
        );
        break;
      case 'kebab-case':
        setValue((prev) => prev.toLowerCase().replace(/[\s_]+/g, '-'));
        break;
      case 'snake-case':
        setValue((prev) => prev.toLowerCase().replace(/[\s-]+/g, '_'));
        break;
      default:
        break;
    }
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue, transform, reset] as const;
};
