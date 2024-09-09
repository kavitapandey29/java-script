//prototype - super class -- kisi class ke andar define kare hai woh
//array-class ke andar define kiya hoga tabhi array ke andar bhut function map,filter, reduce ,slice use kar sakte hai
//datatype--number,string,bullian,define,undefine,array,string
let arr=[];
console.log(arr);//Prototype-Array
//data type ka prototype check karna hai
console.log(arr.__proto__.__proto__.__proto__);//object(0),[Object: null prototype],null



let object={};
console.log(object);//Prototype-Object
console.log(object.__proto__);//[Object: null prototype] {}

//primitive types- number,string,bullian,define,undefine,null,symbol

let number =2;
console.log(number);
//prototype of no.
console.log(number.__proto__);//Number class

let str="kavita";
console.log(str);
console.log(str.__proto__);//String class

let bul=true;
console.log(bul.__proto__);//Boolean

//undefine ki class nahi hai isiliye java ke behavior change hota hai
let num=undefined;
console.log(num.__proto__);//error

let num2=null;
console.log(num.__proto__);//error










