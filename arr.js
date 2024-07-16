// const arr = [0,2,4,6,7,8,];
//zero based indexing
//copy operation in js it creates shallow copy 
//it means it copies the reference of the object
//so if we change the value of the object it will change in both the places
//so to avoid this we use deep copy
//deep copy means it copies the value of the object
//so if we change the value of the object it will not change in both the places
//so to do deep copy we use spread operator
//spread operator is used to copy the value of the object
//it is used to copy the value of the objec
//it is used to copy the value of the objec
//it is used to copy the value of the objec
// const arr1 = new Array(100);
// const arr3 = ["Anisha","Anishu","Anjali"];
// Array methods
// const arr = [0,2,4,6,7,8,];

// arr.push(1);
// arr.push(10);
// arr.push(100);
// arr.push(20);
// arr.pop();
// arr.unshift(0);//Baicllcaly it shift zro at start shift all the values in array time cosuming 

// arr.shift();
// console.log(arr);
// console.log(arr1);
// console.log(arr3);
//myarr.include(9)
// it basicallly checks whter 9 is present or not if not then it gives boolean typer data lie false or true
// slice and splice
// ..doubt slice and splice
// .length  length of arry 
// .join()  join the array elements with the string
// it basically join the array and ind in the form of string 
// .. string type join functon return 
// .reverse() reverse the array elements
// .sort() sort the array elements
// .concat() concat the array elements
// .indexOf() index of the element in the array
//diffent method of array in javasript 
//There is also pop operation in array
//indexof(9); //it gives -1 because it doesnot exits
// .splice() it is used to remove the element from the array
// .splice(0,1) it removes the element from the array
// const myArr = ()
// console.log("A ",arr);
// const my = arr.slice(1,3);
// console.log(my);
// console.log("B ",arr);
// const my1 = arr.splice(1,3);
// console.log("C",arr);
// console.log(my1);
/**
 

In JavaScript, slice() and splice() are two array methods that are often confused with each other due to their similar names and purposes. However, they have distinct differences in their behavior and use cases.

slice()

slice() is a non-mutating method that returns a shallow copy of a portion of an array into a new array. It does not modify the original array.

Syntax: arr.slice([start], [end])

start: The index at which to begin the slice (inclusive). If omitted, starts at the beginning of the array.
end: The index at which to end the slice (exclusive). If omitted, goes to the end of the array.
Example:


Verify
Edit
Copy code
const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 3); // returns [2, 3]
console.log(arr); // [1, 2, 3, 4, 5] (original array remains unchanged)
splice()

splice() is a mutating method that modifies the original array by removing or replacing elements. It returns an array of the removed elements.

Syntax: arr.splice(start, deleteCount, [item1, item2,...])

start: The index at which to start changing the array.
deleteCount: The number of elements to remove from the array.
item1, item2,...: The elements to add to the array, starting at the start index.
Example:


Verify
Edit
Copy code
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b'); // returns [2, 3]
console.log(arr); // [1, 'a', 'b', 4, 5] (original array is modified)
Key differences:

Mutability: slice() does not modify the original array, while splice() modifies the original array.
Return value: slice() returns a new array, while splice() returns an array of removed elements.
Purpose: slice() is used to extract a portion of an array, while splice() is used to modify an array by removing or replacing elements.
When to use each:

Use slice() when you need to extract a portion of an array without modifying the original array.
Use splice() when you need to modify an array by removing or replacing elements.



Voice
Answer with Web Search

non mutating mwthod menaig here


In the context of JavaScript arrays, a non-mutating method is a method that does not modify the original array. Instead, it returns a new array or a value without changing the original array.

In the case of slice() and splice(), slice() is a non-mutating method, while splice() is a mutating method.

Here's why:

slice() is non-mutating:

It returns a new array that is a shallow copy of a portion of the original array.
The original array remains unchanged.
slice() does not modify the original array's length or contents.
Example:


Verify
Edit
Copy code
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 3); // returns [2, 3]
console.log(arr); // [1, 2, 3, 4, 5] (original array remains unchanged)
splice() is mutating:

It modifies the original array by removing or replacing elements.
The original array's length and contents are changed.
splice() returns an array of the removed elements, but the original array is modified.
Example:


Verify
Edit
Copy code
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b'); // returns [2, 3]
console.log(arr); // [1, 'a', 'b', 4, 5] (original array is modified)
Other non-mutating array methods in JavaScript include:

filter()
map()
reduce()
concat()
includes()
indexOf()
lastIndexOf()
These methods all return a new value or array without modifying the original array.

 */
//
const marvel_heros = ["thor","ironman","spiderMan","batman"]
const dc = ["piderman","flash","heroes"];
// marvel_heros.push(dc);
// console.log(marvel_heros);
// //arrauy ke ander array array is songle elemet here
//
//  const all = marvel_heros.concat(dc);
// console.log(all);
//spread operator
// const all = [...marvel_heros,...dc]
// console.log(all)
/**********************8 */
// const arr = [1, 2, 4, 5, 5, 7, [2, 4, 6, 8], [4, 8, 9, 4, 3, [6, 2, 7, 8]]];
// const real = arr.flat(Infinity);
// console.log(real);
// Array.isArray("hitesh");
//asking question is tihs arry 
// ifwamt to conveert into array
// console.log(Array.from("Anisha"));
// output this line [ 'A', 'n', 'i', 's', 'h', 'a' ] convdrtit o arrya
// console.log(console.log(Array.from({name,"anjali"}))
// kiska array nbanu
//interesting ***************

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
//retunr nrew elemnts from set of arry
//is from of methods need to learn from the ai blackbox


