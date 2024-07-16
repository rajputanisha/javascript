// const name = "Anisah";
//  const repo = 50;
//  console.log(name+repo+"value");
//  //nowadays we use backticks
//  console.log(`hello mu name is ${name} and my repo count is $ {repo}`);
//  //we can also use template literals to add html elements to the page
//  const gameName = new String('hites');
//  //we give value in constructor
// //  string is object her 
// // THERE are differnt strig methods in js like charat where we at this index which value is present indexof we get the index if the character 
// //  substring methid where we give start index ans end index 
// //  to get the substring
// //  concat method where we can concat two strings
// //  toUpperCase and toLowerCase method where we can convert the string to upper case and lower case
// //  trim method where we can remove the space from the string
// //  split method where we can split the string into array
// // slice  method where er use negavtive values(-8,4);
// //  replace method where we can replace the string with the new string
// const newString = "       Anisha";
// //  console.log(newString.trim());
// //  console.log(newString.toUpperCase());
// //  console.log(newString.toLowerCase());
// //  console.log(newString.concat(" is a good girl"));
// //  console.log(newString.concat(" is a good girl", " and she is a good girl
// //  console.log(newString.split(" "));
// //  console.log(newString.slice(0, 8));
// //  console.log(newString.slice(-8, 4));
// //  console.log(newString.replace("Anisha", "Anisha is a good girl"));
// // start trim and end trim
// //  console.log(newString.trimStart());
// //  console.log(newString.trimEnd());
// //  console.log(newString.trimStart("Anisha"));
//  const url = "https//hites/com/hites%20choudhry";
// // //we want to remoe 20 .there are diffenrt method to remove 
//   console.log(url.replace(/%20/g, "-"));
// //  console.log(url.replace(/%20/g, " "));
// //  console.log(url.replace(/%20/g, " "));

//we can also asked question
// console.log(url.includes('sundar'));
// console.log(url.startsWith('https'));
// console.log(url.endsWith('com'));
// i want to comvert string into array

//lets suppose we have  value
//  const name = new String('hitesh-hc-com);
  // i want ot splitt based on dash 
// console.log(name.split(''));
// const score = 4//
// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(8));
// suppose yoou have large 00000 in your number hundred 
// const hundred = 10000;
// console.log(hundred.toLocaleString('en-IN'));

// *******************MATHS**************
// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));// ceil mtlb zara bhi 4 se upper hua always choose ceil value
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.random()*10);
// value can be zero also 
// 0.041 to avoid these case we use +1 .it igve gurranty minimu value is 1;
// console.log(Math.floor(Math.random()*10)+1);
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
