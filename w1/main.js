console.log("Hello from inside the main.js");

//let myVar;
const myVar = 42;
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log('myVarType ${myVarType}');

if(myVarType ==="number") {
    console.log(' will 11 this one run?')
 
 } else {
        console.log('Will 13 this one run');
    }

function runNow () {
    console.log('inside the function');
}


runNow();
runNow();
