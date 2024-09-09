//super Constructor- constructor override karne ke liye constructor class mai super constructor ko invoke karna hota hai
//super chalega base class mai derive class mai 

class ParentClass{
    className;
    firstName;
    constructor(name){
        this.className=name;
    }
}
//child to parent
//parent se data lena
class ChildClass extends ParentClass{
    //constructor override
    constructor(name){
        //super constructor invoke karna hai
        super(name);
        this.className=name;
    }

}

let child=new ChildClass("puneet");
console.log(child);
console.log(child.className);



//constructor inherit
//constructor override

//child to parent = data -super()

