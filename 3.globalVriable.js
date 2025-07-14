/*
//un strict moce  : declaring a variable without var,let,const is allowed,
// reassignment is allowed,
// but it's a bad practice and can lead to bugs.
globalPi = 13.14;

console.log("Global variable globalPi:", globalPi);
*/

"use strict";
globalPi = 13.14;
console.log(globalPi); //ReferenceError: globalPi is not defined
// In strict mode, global variables must be declared with var, let, or const

//global variable means nothing, it's just a variable without any scope and rules

globalPi = "kanchan"; //works without stict mode, but not recommended
console.log("Global variable globalPi:", globalPi); // "kanchan"
