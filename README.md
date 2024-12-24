# use-hook

A collection of custom React hooks to simplify state management in your applications. 🚀

## Table of Contents

- [use-hook](#use-hook)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [npm](#npm)
    - [yarn](#yarn)
    - [pnpm](#pnpm)
  - [Getting Started](#getting-started)
  - [Hooks](#hooks)
    - [useBoolean](#useboolean)
    - [useString](#usestring)
    - [useNumber](#usenumber)
    - [useArray](#usearray)
    - [useObject](#useobject)
  - [Examples](#examples)
    - [useBoolean Example](#useboolean-example)
    - [useString Example](#usestring-example)
    - [useNumber Example](#usenumber-example)
    - [useArray Example](#usearray-example)
    - [useObject Example](#useobject-example)

## Installation

You can install `use-hook` using your favorite package manager:

### npm

```sh
npm install use-hook
```

### yarn

```sh
yarn add use-hook
```

### pnpm

```sh
pnpm add use-hook
```

## Getting Started

To start using the hooks, simply import them into your React component:

```tsx
import React from 'react';
import { useBoolean, useString, useNumber, useArray, useObject } from 'use-hook';

const App = () => {
  const [isVisible, setIsVisible, setTrue, setFalse, toggle, resetBoolean] = useBoolean(false);
  const [name, setName, transformName, resetName] = useString('John Doe');
  const [count, setCount, increment, decrement, multiply, divide, resetCount, setMin, setMax] = useNumber(0);
  const [items, setItems, pushItem, popItem, shiftItem, unshiftItem, clearItems, resetItems] = useArray([]);
  const [user, setUser, setProperty, clearUser, resetUser, mergeUser] = useObject({ name: 'John', age: 30 });

  return <div>{/* Your component code */}</div>;
};

export default App;
```

## Hooks

### useBoolean

A custom hook that provides a boolean state with utility functions to manipulate it.

```tsx
const [value, setValue, setTrue, setFalse, toggle, reset] = useBoolean(initialValue);
```

- `value`: The current boolean state.
- `setValue`: A function to set the state.
- `setTrue`: A function to set the state to true.
- `setFalse`: A function to set the state to false.
- `toggle`: A function to toggle the state.
- `reset`: A function to reset the state to the initial value.

### useString

A custom hook that provides a string state with utility functions to manipulate it.

```tsx
const [value, setValue, transform, reset] = useString(initialValue);
```

- `value`: The current string state.
- `setValue`: A function to set the state.
- `transform`: A function to transform the string state based on the specified type.
- `reset`: A function to reset the state to the initial value.

### useNumber

A custom hook that provides a number state with utility functions to manipulate it.

```tsx
const [value, setValue, increment, decrement, multiply, divide, reset, setMin, setMax] = useNumber(initialValue);
```

- `value`: The current number state.
- `setValue`: A function to set the state.
- `increment`: A function to increment the state by a given step.
- `decrement`: A function to decrement the state by a given step.
- `multiply`: A function to multiply the state by a given factor.
- `divide`: A function to divide the state by a given divisor.
- `reset`: A function to reset the state to the initial value.
- `setMin`: A function to set the state to the maximum of the current state and a given minimum value.
- `setMax`: A function to set the state to the minimum of the current state and a given maximum value.

### useArray

A custom hook that provides an array state with utility functions to manipulate it.

```tsx
const [value, setValue, push, pop, shift, unshift, clear, reset] = useArray(initialValue);
```

- `value`: The current array state.
- `setValue`: A function to set the state.
- `push`: A function to add an item to the end of the array.
- `pop`: A function to remove the last item from the array.
- `shift`: A function to remove the first item from the array.
- `unshift`: A function to add an item to the beginning of the array.
- `clear`: A function to clear the array.
- `reset`: A function to reset the array to the initial value.

### useObject

A custom hook that provides an object state with utility functions to manipulate it.

```tsx
const [value, setValue, setProperty, clear, reset, merge] = useObject(initialValue);
```

- `value`: The current object state.
- `setValue`: A function to set the state.
- `setProperty`: A function to set a property of the object.
- `clear`: A function to clear the object.
- `reset`: A function to reset the object to the initial value.
- `merge`: A function to merge a new object into the current state.

## Examples

### useBoolean Example

```tsx
import React from 'react';
import { useBoolean } from 'use-hook';

const BooleanExample = () => {
  const [isVisible, setIsVisible, setTrue, setFalse, toggle, reset] = useBoolean(false);

  return (
    <div>
      <p>Visible: {isVisible.toString()}</p>
      <button onClick={setTrue}>Show</button>
      <button onClick={setFalse}>Hide</button>
      <button onClick={toggle}>Toggle</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default BooleanExample;
```

### useString Example

```tsx
import React from 'react';
import { useString } from 'use-hook';

const StringExample = () => {
  const [name, setName, transform, reset] = useString('John Doe');

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => transform('uppercase')}>Uppercase</button>
      <button onClick={() => transform('lowercase')}>Lowercase</button>
      <button onClick={() => transform('capitalize')}>Capitalize</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StringExample;
```

### useNumber Example

```tsx
import React from 'react';
import { useNumber } from 'use-hook';

const NumberExample = () => {
  const [count, setCount, increment, decrement, multiply, divide, reset, setMin, setMax] = useNumber(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => multiply(2)}>Multiply by 2</button>
      <button onClick={() => divide(2)}>Divide by 2</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setMin(5)}>Set Min 5</button>
      <button onClick={() => setMax(10)}>Set Max 10</button>
    </div>
  );
};

export default NumberExample;
```

### useArray Example

```tsx
import React from 'react';
import { useArray } from 'use-hook';

const ArrayExample = () => {
  const [items, setItems, push, pop, shift, unshift, clear, reset] = useArray<number>([1, 2, 3]);

  return (
    <div>
      <p>Items: {items.join(', ')}</p>
      <button onClick={() => push(4)}>Push 4</button>
      <button onClick={pop}>Pop</button>
      <button onClick={shift}>Shift</button>
      <button onClick={() => unshift(0)}>Unshift 0</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ArrayExample;
```

### useObject Example

```tsx
import React from 'react';
import { useObject } from 'use-hook';

const ObjectExample = () => {
  const [user, setUser, setProperty, clear, reset, merge] = useObject({ name: 'John', age: 30 });

  return (
    <div>
      <p>User: {JSON.stringify(user)}</p>
      <button onClick={() => setProperty('name', 'Jane')}>Set Name to Jane</button>
      <button onClick={() => merge({ age: 25 })}>Merge Age 25</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ObjectExample;
```

Enjoy using `use-hook`! 🎉

Made with ❤️ by [Bruno Silva](https://github.com/brunos3d).
