
//number system- octal , binary , decimal ,hexadecimal
//custom

let a=10;
console.log(a.toString(8));//12 (octal base)
console.log(a.toString(2));//1010 (binory)
console.log(a.toString(16));//a (0,9 (a,b,c,d)

console.log(a.toString(5));//20
let rv=a.toString(8);//method
console.log(rv);//12


//rounding - floor,ceil,trunc,tofix

let x=10.66666666;
//Math name ke obj ke andar floor name ka function hai
console.log(Math.floor(x));//10 (floor niche wali value)
console.log(Math.ceil(x));//11(ceil uppar wali value)
console.log(Math.trunc(x));//10(trunc and floor same way se kaam karte hai)
console.log(x.toFixed(2));//(toFixed-.5 ya .5ke uppar wali value mai +1 karega aur niche wali value same hi rahegi)


//random- 0,1 bich ki value
//for absolute value-Math.floor
console.log(Math.floor(Math.random()*100));//0 se 100 ke bich any no.

let rv2=Math.random();
console.log(rv2);

//imprecison calcuation
console.log(10+40+true-false+20);//71 (corcian ToPrimitive ToNumber ko dera hai)












