//undefine dega-- concept hoisting-- var
//var ki memory ban jati hai -- that's why we can use it 
//if we'll do with the let then it throws error
console.log(age);
var age=27;
// function fun(params) {
    
// }

//undefine
//28
//var 2 baar use kar sakte hai 
//let nahi kar sakte
var age=28;
function fun(params) {
    console.log(age);
    var age=27;
    console.log(age);
}
fun();

/*
age= global
fun--global
age-- fun ka scope

excution phase
age=28;
10 age retrieve - fun ke scope - nahi hai--- undefine
age=27
age retrieve=toh 27
 */