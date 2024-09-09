

class ParentClass{
    className;
    constructor (name){
        this.className=name;
    }
    //signature same //work different
    testing(){
        return "test";
    }
}

class ChildClass extends ParentClass{
    //signature same //work different
    testing(){
        //super se parent ki properties lete hai
        console.log(super.testing());
        return "hello world"
    }
}
let child = new ChildClass("puneet");
console.log(child.testing()); //test hello world
