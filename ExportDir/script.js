const fruits = require("./fruits")

console.log(fruits);

console.log(fruits[0]);

console.log(fruits[0].name);

for ( let i = 0 ; i < fruits.length ; i++){
    console.log(`${fruits[i].name} is ${fruits[i].color}`);
    
}