// // //This keyword
// // //This keyword is used to refer to the current object.
// // //The this keyword refers to different objects depending on how it is used.
// // //The this keyword is different from the var keyword.
// // //The this keyword is used in methods.
// // //The this keyword is used in a constructor.
// // //The this keyword is used in a function.
// // //The this keyword is used in an event.
// // //The this keyword is used in an object literal.
// // //The this keyword is used in a function expression.
// // //The this keyword is used in a function declaration.
// // //The this keyword is used in a function expression.
// // //The this keyword is used in a function declaration.
// // //The this keyword is used in a function expression.
// // //The this keyword is used in a function declaration.
// // //The this keyword is used in a function expression.
// // //The this keyword is used in a function declaration.
// // //The this keyword is used in a function expression.
// // //The this keyword is used in a function declaration.
// // const user = {
// //   username : "hites",
// //   price : 344,

// // welcomeMessage : function(){
// //   console.log(`Welcome ${this.username} to the website`);
// //   console.log(this)

// // }
// // }
// // user.welcomeMessage();

// // /**
// //  * The code you provided has a few issues:

// // The welcomeMessage function is trying to access the username variable, but it's not defined within the function's scope. Instead, you should access the username property of the user object using this.username.
// // The object literal syntax is incorrect. You need to separate the properties with commas.
// // Here's the corrected code:

// // Edit
// // Copy code
// // const user = {
// //   username: "hites",
// //   price: 344,
// //   welcomeMessage: function() {
// //     console.log(`Welcome ${this.username} to the website`);
// //   }
// // };

// // user.welcomeMessage(); // Output: Welcome hites to the website
// // Explanation:

// // In the welcomeMessage function, this refers to the user object, so this.username accesses the username property of the user object.
// // I added commas to separate the properties in the object literal syntax.
// // With these changes, the code should work as expected!




// // Voice

// // use of this in js


// // In JavaScript, this is a special keyword that refers to the current object or context. The value of this depends on how the function is called and its execution context. Here are some common uses of this in JavaScript:

// // Global context: When a function is not a method of an object, this refers to the global object, which is the window object in a browser environment.

// // Example:

// // Edit
// // Copy code
// // function foo() {
// //   console.log(this); // Output: window (in a browser)
// // }

// // foo();
// // Method of an object: When a function is a method of an object, this refers to the object itself.

// // Example:

// // Edit
// // Copy code
// // const user = {
// //   name: "John",
// //   greet: function() {
// //     console.log(`Hello, ${this.name}!`);
// //   }
// // };

// // user.greet(); // Output: Hello, John!
// // Constructor function: When a function is called with the new keyword, it becomes a constructor function, and this refers to the newly created object.

// // Example:

// // Edit
// // Copy code
// // function User(name) {
// //   this.name = name;
// //   this.greet = function() {
// //     console.log(`Hello, ${this.name}!`);
// //   };
// // }

// // const john = new User("John");
// // john.greet(); // Output: Hello, John!
// // Event handlers: In event handlers, this refers to the DOM element that triggered the event.

// // Example:

// // Edit
// // Copy code
// // const button = document.getElementById("myButton");

// // button.addEventListener("click", function() {
// //   console.log(this); // Output: the button DOM element
// // });
// // Arrow functions: Arrow functions do not have their own this binding. Instead, they inherit the this value from the parent scope.

// // Example:

// // Edit
// // Copy code
// // const user = {
// //   name: "John",
// //   greet: () => {
// //     console.log(`Hello, ${this.name}!`);
// //   }
// // };

// // user.greet(); // Output: Hello, undefined! (because this is inherited from the global context)
// // These are some of the most common uses of this in JavaScript. Understanding how this works is essential for writing object-oriented code in JavaScript.




// // Voice

// //  */
// // // user.username = "sam";
// // // user.welcomeMessage()
// // function chai(){ let username = "anisha";
// //   // console.log(this.username);
// //   // / why this is undedefined in js

// // }
// // chai()
// const chai = () => {
//   let user = "ansiah";
//   console.log(this)
// }
// chai();

 const addTwo = (num1,num2) =>  num1+num2;
//  implicit
//  console.log(addTwo(3,5))