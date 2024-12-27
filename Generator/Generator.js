function* myGenerator() {
    yield "First value";
    yield "Second value";
    yield "Third value";
}
  
  // Using the generator
  const generator = myGenerator();
  
    for (const value of generator) {
    console.log(value); // Outputs: "First value", "Second value", "Third value"
}

// Summary of Generators in JavaScript

/**
 * 1. Generators are really cool way to generate iterables.
 *    - Generators make it easy to create objects that can be iterated over using loops like `for...of`.
 */

/**
 * 2. You can finally return multiple values from a function.
 *    - Generators allow you to return multiple values progressively instead of just one.
 */

/**
 * 3. Since generators return iterator, you can loop on them using `for...of`.
 *    - The objects returned by Generators can be iterated using `for...of` loops.
 */

/**
 * 4. `yield` can wait for promises to be resolved.
 *    - You can pause the execution with `yield` until a promise is resolved.
 */

// Example of a simple generator