//data calcute in ilisecond 
// sring value can be large
// 1 min = 60 sec
// 1 hour = 60 min
// 1 day = 24 hour
// 1 week = 7 day
// 1 month = 30 day
// 1 year = 12 month
// 1 decade = 10 year
// 1 century = 100 year

let myDate = new Date();
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}));
console.log(myDate.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}));
console.log(myDate.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}));
console.log(typeof myDate)
let createdate = new Date(2023,0,23);
console.log(createdate.toDateString);
let mytimeStamp = Date.now()
console.log(mytimeStamp);
let createDate = new Date("2023-00-14")
let createDat = new Date("01-14-2023")
// invalid  but i did not understand 
//TIMESTAMP IN JAVASCRIPT
console.log(Math.floor(Date.now()/100))//this gives current value now ocnvert into second
// newDate.toDateString()


