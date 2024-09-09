

function fun(){
    console.log("many functions");
    
}
fun();
fun();
fun();
fun();
fun();
fun();
fun();
fun();
fun();

//esa function jo ek baar use karne ke baad khatm ho jaye
//IIFE--Immediately Invoked Function Expressions

//syntax()();

(function func(){
    console.log("only one functions");
    
})();