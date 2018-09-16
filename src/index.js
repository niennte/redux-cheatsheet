/* eslint-disable no-console */

// class imports
import Dog from './Dog';

const str = 'ES6 (interpreted on the fly by Babel-Node)';

// template strings
console.log(`Hello ${str}`);

// arrow func
const Toby = new Dog('Toby');
((text) => {
  console.log(text);
})(Toby.bark());
