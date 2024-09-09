

//esa DataType bnana hai jise mltiple time use kar sake toh use baar baar na bnana pade
//class--blueprint hai ,prototype
//class ke andar let,var,const lagane ki jarrort nahi hoti
//class mathods ko bolte hai fields

//syntex
//class -- prototype
// class DiceEmployee{
//     firstName;
//     lastName;
//     age;
   
//     //class ke andar ek hi baar chalega
//     constructor(fname,lname,age){
//         this.firstName=fname;
//         this.lastName=lname;
//         this.age=age;

//     }
//     task(){
//         console.log("task");
        
//     }
// }

// // let emp1= new DiceEmployee();
// // console.log(emp1);
// // let emp2=new DiceEmployee();
// // console.log(emp2);
// let emp1=new DiceEmployee("damon","salvatore",22);
// console.log(emp1);
// let emp2=new DiceEmployee("stafen","salvator",19);
// console.log(emp2);



//inheritence--behavior apne parent element se inherit karta hai

class ParentClass{
  className="Parent Class here";
  getClassName(){
    //this means current context --parent class ko hi return karega
    return this.className;
  }
}
//if we need same property in here so we can inherit same property here
// class ChildClass{
//     className="ParentClass";
//     getClassName(){
//       return this.className;
//     }
// }

//so we can inherit it from the help of extend with ParentClass
class ChildClass extends ParentClass{

}
//har class ka super class mai object hota hai
//ParentClass object dega
let parent= new ParentClass();
console.log(parent);

console.log(parent.getClassName());//parent class hi output dega


//propery inherit ParentClass se ki hai toh object nahi aayega 
let child = new ChildClass();
console.log(child);

console.log(child.getClassName());//parent class output dega ise inheritence bolte hai
console.log(child.className);//"Parent Class here"



