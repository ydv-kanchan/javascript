/*
const - it is a block-scoped variable declaration
1. it cannot be redeclared or reassigned in the same scope
2.it must be initialized at the time of declaration
3.it is hoisted, but not initialized, meaning it cannot be used before it is declared. gives error.
4.it is used to declare constants, which are variables that can not be changed after they are defined.
5. they are block scoped, meaning they can only be accessed within the block they are defined in.
 */

const value = 42;
console.log("const value:", value);
// value = 100;
// TypeError: Assignment to constant variable.

const obj = {
  name: "kanchan",
};
console.log("const object  before modification:", obj.name);
obj.name = "kanchanyadav";

console.log("const object after modification:", obj.name);

//this is called mutating the object, not reassigning the object, which means
//we are not changing the reference of the object, we are just changing the properties of this object
