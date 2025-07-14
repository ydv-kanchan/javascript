/*
var - is a outdated variable decllaration type now because:
1. it can be redeclared and reinitiailsed 
2. it is of function scope, not block scope
3. it is hoisted as undefined, meaning it can be used before it is declared
4. it can lead to bugs in the code

*/

var name;
console.log("uninitialised name:", name);
var name = 10;
console.log("redeclared and initialised name:", name);
name = "kanchan";
console.log("reinitialised name:", name);

function varscope() {
  var localVar = "I am a local variable";
  console.log("Inside function, localVar:", localVar);
  if (true) {
    var localVar = "I am still a local variable but in if block";
    console.log("Inside if block, localVar:", localVar);
  }
}
varscope();
console.log("Trying to access localVar outside function:", typeof localVar); // undefined