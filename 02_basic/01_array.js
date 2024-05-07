//! array

// const array = [12,2,3,'bilal',true]
// console.log(array)

// const myArr2 = new Array(1,2,3) //convert into array []
// console.log(myArr2)
// console.log(myArr2.length)
// console.log(myArr2[2])

//* ARRAY METHOD

const arr = [1, 2, 3, 4, 5];
// arr.push(6) //end add
// arr.push(7)
// arr.pop()  //end pop
// arr.pop()

// arr.unshift(0) //starting add
// arr.shift()   //start remove

// console.log(arr)
// console.log(arr.includes(6)) //boolean T or F
// console.log(arr.indexOf(6)) //index dakhta hy ma exit nhi krtha [1,2,3,4,5] six index ma nhi hy islye -1 daktha hy
// console.log(arr.indexOf(3)) //index ma exit krtha [1,2,3,4,5] third index ma 2

// const myarr = arr.join()
// console.log(arr)
// console.log(myarr)  //convert string and combined
// console.log(typeof myarr)  //string

//* slice,splice
// console.log("A", arr);

// let myarr1 = arr.slice(1, 3);
// console.log(myarr1);  //[2,3]
// console.log("B",arr)

// const myarr3 = arr.splice(1,3) ///remove index 1 to 3
// console.log("C", arr);
// console.log(myarr3)

let arr1 = ["a", "b", "c"];
let arr2 = [1, 2, 3, 4];

// arr1.push(arr2)
// console.log(arr1[3][2])

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//*spread
let array4 = [...arr1, ...arr2];
// console.log(array4)

//* the flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let arr6 = [1,2,3,[4,5,6,[7,8,9,[999,84],[99]]],[8838]]
// let arr7 = arr6.flat(Infinity)
// let arr7 = arr6.flat(2) //output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 999, 84 ], [ 99 ], 8838 ]
// console.log('arr7: ', arr7);

console.log(Array.isArray("Bilal")); //False
console.log(Array.from("Bilal")); //convert array
console.log(Array.from({ name: "Bilal" })); //output : empty []

let score1 = 2000;
let score2 = 5000;
let score3 = 3000;

console.log(Array.of(score1, score2, score3));
