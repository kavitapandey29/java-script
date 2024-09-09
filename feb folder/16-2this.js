/*
this keyword -js

global - this
inside function -this
method - thid
method-function -es5 - this
method-function -es6 -thid
document.quaryselector- this(dom)
constructor-this
*/

// global
    // console.log("hello world");

 //local   
    // function a(){
    //     console.log("hey");
    // }


// if we are using this keyword globaly so log will be window
// console.log(this);


//if we are using thid keyword with function so log will be window
function abcd() {
    console.log(this);
    
}
abcd();

/* es5
inside object function called mathod
mathod ke andar this ko invoke karenge toh woh parent object dega
*/
let obj={
    name:"kavita",
    somefun:function(){
        console.log(this);
    }
}
obj.somefun();


/*
es6 >> this keyword gives window
*/
let obj2={
    name:"jhone",
    fun:()=>{
        console.log(this);
    },
    age:22,
    address:"delhi",
}
obj2.fun();

