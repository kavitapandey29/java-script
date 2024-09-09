//this keyword
// es5 function window dega

// function fun(){
//     console.log(this);
// }
// fun()


//es6 fat arrow function window object dega
// let fn=()=>console.log(this);
// fn();


//object ke andar - es5 function parent object - 
// let obj={
//     name:"kavita",
//     age:24,
//     fun:function(){
//         console.log(this);
//     }

// }
// obj.fun()



//es6 function window object
// let obj={
//     name:"kavita",
//     age:24,
//     fun:()=>console.log(this)
    

// }
// obj.fun()


/*
constructor function - aisa function jiske andar this and new use hota hai
this > new object dega     new > bind kar dega
constructor function- ek aisa jugaad jo hame ek naya object de(function programing)bolte hai
 */

function fun(){
    this.name="kavita";
    this.age=24;
}
//{blank object}.name="kavita"
let ans=new fun()
console.log(ans);

//this ek empty object hai
function makeHuman(name,age) {
    this.name=name;
    this.age=age;
    
}
const answ =new makeHuman("puneet",27);
console.log(answ);



//typeof operator - type btata hai(human1 ka typeof)
function makeAnother(name,age){
    this.name=name;
    this.age=age;

}
const human1=new makeAnother("puneet",28);
const human2=new makeAnother("vikas",38);
const human3=new makeAnother("rohan",48);
console.log(human1,human2,human3);
console.log(typeof human1);




//
function moreHuman(x,y,z){
    this.name="kavita"
}
let answe=new moreHuman(10,20,30)
console.log(answe);


//
function makeAnotherHuman(){
    this.name="kavita";
    this.age=22;
    this.address="delhi"
    this.ismarried=undefined;
}
const answer=new makeAnotherHuman();
console.log(answer);
