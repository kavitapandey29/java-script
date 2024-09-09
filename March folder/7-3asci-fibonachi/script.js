//== coercion - type casting
//=== coercion x - ty[e check, value check]

console.log(3=="3");
//"3 = tonumber =3"
//3== true

console.log(3===3);
console.log(3==="3");

//ascii code- source code ko numbers mai convert kar deta hai
// charCodeAt () method hai jo sting pe chalta hai
//object ka prototype Object 
// array ka prototype Array
//String. prototype
//String.fromCharCode() it's a function

let ch="a";
let ans=ch.charCodeAt();
console.log(ans);

let ans2=String.fromCharCode(78)
console.log(ans2);



