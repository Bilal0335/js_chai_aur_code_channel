//Primitive

/*
* 7 types
1.String
2.Numer
3.Boolean
4.Null ==> empty
5.Undefine
6.symbol
7.BigInt
*/

const score = 23;
const scoreValue = 23.45;
let isLoggi = true;
let outsideTemp = null;
let Num;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id == anotherId); //not equal but false

const bigNumber = 4344326875778388585888n;

/*
Refference (Non Primitive )
1.Array
2.Object
3.Function
*/

const arr = ["akmal", "data", "transcation"];

let myObj = {
  name: "bilal",
  age: 44,
  isStudent: true,
};

function Function() {
    console.log("hello")
}
const my = function(){
    return "bilal"
}


// console.log(typeof score)
// console.log(typeof scoreValue)
// console.log(typeof outsideTemp)
// console.log(typeof isLoggi)
// console.log(typeof Num)
// console.log(typeof id)
// console.log(typeof bigNumber)
// console.log(typeof my)
// console.log(typeof arr)
// console.log(typeof myObj)

//! Website link javascript
//  https://262.ecma-international.org/5.1/#sec-11.4.3


/*
//****************************************************
Stack
Heap
*/