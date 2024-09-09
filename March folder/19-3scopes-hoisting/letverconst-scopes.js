//var - function and global scope-- hosting 
//let and const - block scope

//block scope
{
    let age=30;
    console.log(age);
}
0
//global scope
var age=27;
function fun(){
    console.log(age);
}
//value retrive
console.log(age);
fun();


function func(){
    var aged=22;
    console.log(aged);
}
console.log(aged);
func();

/*
parsing phase- func- global
aged-fun ka scope

excution phase
age- fun ka scope--22
L24- aged -- global check --nahi hai --fuction retrive nahi kar sakte toh aayega error
*/
