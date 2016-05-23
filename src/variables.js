'use strict';

/**
 * const
 * can´t be reassigned
 * a = 'b' will throw an error
 */
const a = 'a';

/**
 * let
 * block scope variables
 * unlike es5 variables will only live
 * within the block scope they are declared
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (var c = 0; c < 10; c++) {
  console.log(c);
}

console.log(c);
