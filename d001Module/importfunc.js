//const importModule = require('http') //core module
//const importModule = require('./index') //local module
// const importModule = require('express') //third part module
// console.log(importModule);
const importModule = require('./index') //local module example
// importing funcation from local module
add = importModule.add(2,4)
console.log(add);
sub = importModule.sub(5,2)
console.log(sub);