//scope is very important and very vast toic i javascrit like clsoure lexical scope local scope

//nedd og this variable
// var c = 300; thisis create a proble ofr function like it always give 4 instead of 300z
let a = 400;
 if(true){
  let a = 10;
  var b = 4;
  const c = 45; 
  console.log(a)

}
//this we called scope

// console.log(a)
console.log(a)// var is ccesible outsde theblock
// console.log(c)

//nested scope in js//
function  one(){
  const useranem  = "anisha";
  function two(){
    const website = "youtube";
    console.log(website)
  }
  console.log(useranem)
  two()
}
// one()
if(true){
  const useranem  = "anisha";
  if(useranem == "anisha"){
    const website = "youtube";
    console.log(useranem+website)

    }
    // console.log(website)//error
}
// console.log(useranem)
// here two cn acees one but one can/t access two
/*************************interinsting */
function print(num){
return num+1
}
print(5);
const addTwo = function(num){
  return num +2
}
addTwo(5);
/**I'd be happy to help you understand what's going on in your JavaScript code.

Let's break it down step by step:

1. print function

Edit
Copy code
function print(num) {
  return num + 1
}
print(5);
Here, you've defined a function named print that takes a single argument num. The function simply returns the result of adding 1 to num.

When you call print(5), the function is executed with num set to 5. The function returns 5 + 1 = 6, but you're not doing anything with the returned value. If you wanted to see the result, you could use console.log:

Edit
Copy code
console.log(print(5)); // Output: 6
2. addTwo function

Edit
Copy code
const addTwo = function(num) {
  return num + 2
}
addTwo(5);
Here, you've defined a function expression (an anonymous function assigned to a variable) named addTwo. This function takes a single argument num and returns the result of adding 2 to num.

When you call addTwo(5), the function is executed with num set to 5. The function returns 5 + 2 = 7, but again, you're not doing anything with the returned value. If you wanted to see the result, you could use console.log:

Edit
Copy code
console.log(addTwo(5)); // Output: 7
What you might not understand:

In JavaScript, when you call a function, the function's return value is not automatically printed to the console. You need to use console.log or assign the result to a variable to see the output.
In your code, both print and addTwo functions are defined, but their return values are not being used. If you want to see the results, you need to use console.log or assign the results to variables.
Here's the modified code with console.log statements:

Edit
Copy code
function print(num) {
  return num + 1
}
console.log(print(5)); // Output: 6

const addTwo = function(num) {
  return num + 2
}
console.log(addTwo(5)); // Output: 7
I hope this helps clarify things!




Voice
/ */