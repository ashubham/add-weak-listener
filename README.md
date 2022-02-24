# Add weak Listener

[![npm version](https://badge.fury.io/js/add-weak-listener.svg)](https://badge.fury.io/js/add-weak-listener)

Add weak event listeners from your components/classes based on WeakRefs. This package handles the boilerplate for you, which isn't too much anyways but not particularly good looking.

Typescript defintions are included.

## Why ?

Event listeners are often a source of memory leaks. As the listener maintains a strong depedency to the callback which is in turn dependent on the object/closure,
the closure/object is never Garbage collected.

See [this](https://v8.dev/features/weak-references) awesome article by folks on v8 team, for a detailed explanation.

## Usage

```bash
$ npm i add-weak-listener
```

```js
import addWeakListener from 'add-weak-listener';

class MyComponent {
  constructor() {
    // This event listener will be cleaned by the garbage collector
    // when the an object of MyComponent is GC'd.
    addWeakListener(
      window, // Event Target window / element / socket etc
      'message', // Event type
      this.listener, // The listener callback
      { once: true } // (optional) addEventListener options
    )
  }

  private listener = (ev) => {
    // do something here.
  }
}

```
