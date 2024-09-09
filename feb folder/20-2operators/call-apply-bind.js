/*
call apply bind - function ko call karne ka tarika hai
 */

//Call
function fun (a,b){
    console.log(this);
    return a+b;
}
let rv=fun(2,5)
console.log(rv);
//ans -7
//window


//this keyword ke andar custom object dalna hai toh call ke through function ko envoke karna hai
let obj={name:"kavita",age:20}
function myfun(){
    console.log(this);
}
//myfun()
myfun.call(obj);


//apply - apply custom object bananne ke kaam aata hai par parameter array ki form mai leta hai
let obj2={name:"kavita",age:30}
function myfun(){
    console.log(this);
}
function sum(a,b,c){
    console.log(this);
    console.log(a,b,c);
}
sum.apply(obj2,[1,2,3])



//bind - ek function return karta hai jis function ko baad mai chala sakte hai
newfunction=sum.bind(obj,[1,2,3])
console.log(newfunction);

newfunction();