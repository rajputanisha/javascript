// // // function syMynamw(){
// // //   console.log("w")
// // //   console.log("e")
// // //   console.log("u")
// // //   console.log("q")
// // //   console.log("p")
// // //   console.log("v")
// // // }
// // // syMynamw()
// // // //exctue without bracket it actsl ike rfce

// // function addNumber(num1,num2){
// //   // let a = 10;
// //   // let b = 23;
// //   let c = num1+num2
// // console.log(c);
// // }
// // addNumber(12,"4");
// // // paramet inside th function is clled
// // // output of thi  is 124
// // // because it is not a number it is string so it is concatination
// //  const  re = addNumber(3,"q");
// //  console.log("result",re);
// // //this is the arguments
// // //3q is the output

//  function loginUser(username){
//   if(username == undefined){
//     console.log("pleae enter a username")
//     return ;
//     // empty string we asume fale sirng
  
//   }
//   return`${username} just logged in`
//  }
//  console.log( loginUser(""))
function calcultePrice( val1,val2,...num1){
  //rest operator 
  //rest operator is used to take multiple arguments
  //same as spread operator
  return num1;
  // [ 2, 300, 400 ] output of thois code is this 
  //how to pass multiple vluesin function by
  //  how rest is pass in function

}
console.log(calcultePrice(2,300,400));
// one ore thing i 
const user = {
  userName : "hitehs",
  price : 56
}
function handleObject(any){
  console.log(`userName is ${any.userName} and price ${any.price}`);
}
handleObject(user);