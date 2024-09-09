//method overriding- property overriding---signature same rahega

class ParentClass{
    //parent class
    className="ParentClass";
    //mathod overriding- signature same
    getClassName(){
        return this.className;
    }
  
} 
//parent class se le rha hai
//child classt
class ChildClass extends ParentClass{
    //property same hai as parent class override kar sakte hai 
    //agar property child mai nahi mili toh parent mai jake dhundhega apne
    className="overriding properties";
    //signature was same
    getClassName(){
        return "method overriding";
    }
}
let child=new ChildClass();
console.log(child);
console.log(child.className);
//property mai jake getClassname chalana 
console.log(child.getClassName());//overriding property

