/*
Should:
- take an optional array that contains any arguments you want to pass into the callback function.

Examples:
runWithDebugger(sayHiTo, ['gordon']); // 'hi gordon'

function sayFullName(first, last) {
  console.log(first + ' '  + last);
}

runWithDebugger(sayFullName, ['gordon', 'zhu']); // 'gordon zhu'

*/

function runWithDebugger(callback, args) {
  debugger;
  callback.apply(this, args);
}
