/* 
📘 JavaScript: Primitive Data Types

There are 7 primitive data types in JavaScript:

1. string - Represents a sequence of characters, used for text.
2. number - Represents numeric values (both integers and floating-point) and special values like NaN, Infinity, -Infinity.
3. boolean - Represents a logical value: either true or false.
4. null - Represents the intentional absence of any object value.
   - Special note: `null` is a primitive value, but `typeof null` returns "object". 
     This is a well-known bug in JavaScript and can't be fixed without breaking millions of websites.
5. undefined - Represents a variable that has been declared but not yet assigned a value.
6. symbol - Represents a unique and immutable value, often used as object property keys.
7. bigint - Represents integers with arbitrary precision, useful for values beyond the safe integer limit of the number type.
*/

// 🔁 Common characteristics of primitive data types in JavaScript:
// 1. They are immutable — once created, they cannot be changed.
// 2. They are compared by value — two variables with the same value are equal.
// 3. They are stored in stack memory — fixed size and faster access.

let num = 43;
let decimal = 3.14;
let negative = -43;

console.log("number:", num);
console.log("decimal:", decimal);
console.log("negative:", negative);

console.log(typeof num); // "number"
console.log(typeof decimal); // "number"
console.log(typeof negative); // "number"

console.log(0 / 0); // NaN
console.log(typeof NaN); // "number" ✅

console.log(-1 / 0); // -Infinity
console.log(1 / 0); // Infinity
console.log(typeof (1 / 0)); // "number"
console.log(typeof (-1 / 0)); // "number"

console.log(typeof null); //object, this is legacy bug in js
