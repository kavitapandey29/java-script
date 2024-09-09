//scopes-- visibility

//js complied /translate or interpreted
//scope - variables 
var teacher="vikas";
function fun (){
    var teacher="puneet";
    subject="js";
    console.log(teacher);

}
function funk(){
    var student="suneeta";
    console.log(student);
}
fun();
funk();
console.log(teacher);
// console.log(student);
console.log(subject);

/**
>>>>> parsing phase -- variable add hote hai

teacher - global
L6- fun-- variable --global scope
fun ka scope
teacher--fun ka scope
L12- funk- global
funk ka scope
student--gun ka scope


execution phase-- value add hote hai
L7- teacher- fun ka scope- value-"puneet"
L9- log (teacher) - function scope -nahi hota toh global mai jata
L13- value-suneeta
L14- student ko retrive -ramesh
L18-teacher ki value retrive kar rahe hai-- phli priority global mai hoti hai --global mai pada hai vikas toh vikas print k 
L19-student global mai nahi hai toh output undefine aayega


Auto Global--formatted variabal (let ver const) nahi hai toh usko automatically global scope milega eg.-L8

global nahi hai toh auto global mai jayega
 */