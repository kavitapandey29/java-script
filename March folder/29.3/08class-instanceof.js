//instanceof operator--class ka instance btata hai

class A{

}
class B{

}

let a=new A();
console.log(a instanceof A);//true
console.log(a instanceof B);//false

let b=new B();
console.log(b instanceof B);//true
console.log(b instanceof A);//false



