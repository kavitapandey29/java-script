/*16 jan 2024
js intro
link js to html
js history
statement
js engine
run time environment
client server architectecture
request-browser-server-response
frontend se request to backend-response
request response architecture
comment
semicolon
case sensitivity
native code of java script
*/

/*****
 * output
 * js native output ,browser output
 * document.write (browser native code)
 * console.log(js native code)
 * variable
 * conditionals
 * loops
 * 
 * 
 * 
 * 
 */

//     js - variable - dynmically type
//strings= sequence of character
var name="kavita";
var age=24
var height=5
var weight=50
var grade='A'

console.log("my name is ",name);
console.log("my age is",age);

// tamplate string $
console.log('my name is ${name} and my age is ${age}');

//multiline

//Ram 2 Part 1-stack memory  2-heap memory (variable)


// conditionals
/**
 * if 
 * else
 * else if
 * switch
 * ternary
 */
//condition would be true false

//if -single work  // else not single(if with pair)

//if condition is false in (if) then else would work and outside console
var age=24
if (age<18){
    console.log("you can vote");
}
else {
    console.log("hello world");

}
console.log("outside if else");

//else if

//var age=25;
//if(age<18){
//console.log("go to school");
//}else{
//  if(age>18 && age<20 ){
//    console.log("go to college");
//}
//else{
//  if(age>20 && age<30 ){
//    console.log("go to job");
//}
//}
//}

//right way

var age=70;
if(age<18){
    console.log("go to school");
}else if(age>18 && age<20){
    console.log("go to college");
}else if (age>20 && age<30){
    console.log("go to office");
}else if (age>30 && age<40){
    console.log("party");
}else if (age>40 && age<50){
    console.log("prey");
}
else {
    console.log("stay at home");
}
