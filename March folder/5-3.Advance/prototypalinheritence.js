/*
human -walk,drink,eat
teacher-walk,drink,eat,teach
musician-walk, drink , eat, teach,sing

properties leni hai

*/


// ek nya function printMyName and then call it
//printMyName fuction dono human1 and 2 mai aa gya memory different ban rahi hai dono mai
// globaly ise use kar lo bahar se ise ban lo 
function makeHuman(){
    this.name="kavita";
    this.age=22;
    this.printMyName=function(){
        console.log(this.name);
    }
}
const human1=new makeHuman()
const human2=new makeHuman()
console.log(human1);
console.log(human2);

//object ke andar same memory ja rahi thi kaam same hi hai so constructor ke andar prototype mai globally set kar diya
//har function kuch na kuch return karta hai console log bhi ek function hai toh woh undefine return karega
//yaha globally printname function chala rahe hai
//iske prototype ke andar function set kar diya so we can use it globally ab kitne bhi object bna sakte hai
//console mai type human3.printName() so result will be come
function makeAnother(name,age){
    this.name= name;
    this.age=age;
        console.log(this.name);
    
}
makeAnother.prototype.printName=function(){
    console.log(this.name);
}

const human3 =new makeAnother("puneet",28)
const human4 =new makeAnother("rohan",33)
// console.log(human4.printName());
console.log(human3);
console.log(human4);


//array ki super class hai Array(0)
// sab ki super class hoti hai
let arr=[1,2,3]
console.log(typeof arr);
console.log(arr);