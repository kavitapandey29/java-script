//get and set is called getter-setter
//dynamic
class Employe{
    className="get property";
    msg="get with my msg";
    firstname;
    lastname;

    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;
    }

    get className(){
        return this.className
    }

    set (className){
     this.className=className;
    }

    get mymsg(){
        return this.msg
    }

    set (msg){
        this.msg=msg;
    }



}
let emp1=new Employe("damon","salvatore");
console.log(emp1);
//property get karne ke liye
emp1.className="set property";
emp1.msg="set another property";
//class name emp1 ke andar jake get karna karna hai classname
console.log(emp1.className);//test
console.log(emp1.msg);



//class level
