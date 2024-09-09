
//function Return
//java script ka har function kuch return karta hai agar kuch return nahi karega but at the end undefine aayega
function fun(){
    return 12;
}
let rv=fun();
console.log(rv);

/*es6 fat arrow - implicit return
return > function return and waha jayega jaha use call kiya hai
 */
function fun(){
    console.log("return se phle");
    return "kavita";
    console.log("after the return");
}
let rf=fun();
console.log(rf);

function fug() {
    console.log("hello world");
    return"javascript"
}
console.log("hey");
console.log("hello");
console.log("hye");
fug()
let r=fug()
console.log(r);
console.log("damon");
console.log("elena");
fug();
let r2=fug();
console.log(r2);

/*return value = 23 syntectical sugar
rv variable mai catch 23 and then log
ans- 23
implicit return
 */
let z=()=>23
z();
let ret=z()
console.log(ret);

// function return somthing and this one return undefine
let retu=console.log();
console.log(retu);

// return puneet
function fun(){
return "puneet"
}
let rev=fun()
console.log(rev);

/*return value catch on variable then log
so ans is 30
 */
function sum(a,b){
    return a+b
}
let retur=sum(10,20)
console.log(retur);

