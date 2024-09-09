//multi level inheritentce
//multipal class extends ke baad bhi koi error nahi diya

// class A{

// }

// class B extends A{

// }

// class C extends B{

// }

//------------------------------------------------------------------------------------------------------------------------------------
//multipal inheritence --java script support nahi karti
// class A{

// }

// class B extends A{

// }
// //multipal inheritence
// class c extends A,B{

// }

//-----------------------------------------------------------------------------------------------------------------------------------

//Access Modifier--1-public 2-private 3-protected jo visibility batate hai 
//js mai protected nahi hota hai


class Employe {
    firstName="damon";
    lastName="salvator";
    #salary=1000; //private banega has lagake 
    #getFullName(){ //mathod private ban gya ab iski property ko bahar access nahi kar payenge
        return this.firstName+" "+this.lastName
    }
    //method
    test (){
        console.log(this.#salary);//private property use kar sakte hai sirf class ke andar public property ke andar
        
    }
}
let emp1=new Employe();
console.log(emp1.firstName);
// console.log(emp1.getFullName());
//salary ko koi bhi access kar sakta hai class se bahar 
//so salary ko private bnana chhte hai so koi dekh na sake class ke bahar so use karenge #has
// console.log(emp1.salary);
console.log(emp1.test());



