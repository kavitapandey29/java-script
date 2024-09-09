//date- 13th feb,2024
//task- Functions >> es5 and es6 , array , object , array loop , asyn and async code in js(memory)

// console.log("oil");
// console.log("vaggies");
// console.log("spices");
// console.log("eat");

// console.log("oil");
// console.log("vaggies");
// console.log("spices");
// console.log("eat");

/*function >>for lines of code repeating 
dry- do not repeat yourself
and code reusability
*/
// function dailyfood(){
//     console.log("oil");
//     console.log("vaggies");
//     console.log("spices");
//     console.log("eat");   
// };

// dailyfood();
// dailyfood();
// dailyfood();

// function sayHello() {
//     console.log("hye");   
// }
// sayHello();
// sayHello();
// sayHello();

/*
ES 5 - function statement , function expression, anonymous function

ES 6 - fat arrow function
a- regular fat arrow
b- faty arrow with one parameter
c- fat arrow with implicat return

* */

/*
es 5 function 
* */

/*a-function statement 
dry- do not repeat yourself
and code reusability*/

function sayHello(){
    console.log("good morning");
    console.log("say hello");

}
sayHello();
sayHello();
sayHello();

/*b- function Expression
function java script mai first class members hote hai 
we can store it undar variable and function
*/
let a =function sayHye() {
    console.log("expression");
    console.log("function expression");
}
a();
a();

/*anonymous function
without the name
 */
let b=function () {
  console.log("I am an anonymous function");  
}
b();
b();

console.log( );

/* parameter and arguments
    f(x,y)   =   f(2,3)
    name parameter  kavita ke argument ke andar
*/

function sayGoodMorning(name){
    console.log("good morning " +name);
}
sayGoodMorning("kavita")
sayGoodMorning("megha")

console.log( );

let x=function sayHelloAndPrintAge(name,age){
    console.log("good afternoon "+name);
    console.log("your age is "+age);
}
//sayHelloAndPrintAge("kavita",24)
x("kavita",20)

/*es 6 - fat arrow function
         ()   =>    {}
*/
let y=()=>{
console.log("hello world");
}
y();

// use fat arrow and say good morning
// fat arrow ke andar single parameter hai toh braket(name) hata sakte hai >> name
// with only one statement {} was also not required
let sayHelloToMe=name=>
    console.log("good morning "+name);

sayHelloToMe("kavita")

let sayMyAgeWithName=(name,age)=>{
    console.log("My Name is "+name+"My Age is "+age);
}
sayMyAgeWithName("kavita",20)
