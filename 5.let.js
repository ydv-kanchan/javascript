/*
let - it is a block scoped variable, it can be accessed only within the block it is defined.
it can be reassigned, but not redeclared in the same scope.
it is hoisted, but not initialized, meaning it cannot be used before it is declared. give error
"refereceError: cannot access 'letVariable' before initialization"
 */

let letVariable = "I am a let variable";
console.log("letVariable:", letVariable);

letVariable = "I am a let variable";
console.log("Reassigned letVariable:", letVariable);

// let letVariable; // erro as redeclaration of same vairable in same scope
console.log("Trying to redeclare letVariable:", letVariable); // SyntaxError: Identifier 'letVariable' has already been declared

function letscope() {
  if (true) {
    let letBlockVariable = "I am a block scoped variable";
    console.log("Inside if block, letBlockVariable:", letBlockVariable);
  }
  console.log("outside if block, letBlockVariable:", letBlockVariable); //ReferenceError: letBlockVariable is not defined
}
letscope();
console.log("outside function block, letBlockVariable:", letBlockVariable);
