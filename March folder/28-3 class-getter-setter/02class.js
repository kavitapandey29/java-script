


class Employe{
    firstname="puneet";
    lastname="chaudhary";

    getFullName(){
        return this.firstname+" "+this.lastname
    }
}

let emp1= new Employe();
console.log(emp1.firstname);
console.log(emp1.lastname);
console.log(emp1.getFullName());
//class level pe accses karenge toh error dega
console.log(Employe.firstname);

//  out-put--puneet 
// chaudhary
// puneet chaudhary
// undefined

//--------------------------------------------------------------------------------------------------------------------------------------
class DiceEmployees{
    firstname="puneet";
    lastname="chaudhary";
    salary=20000;
    //ek baar hi chalega jab new function banega
    //dynamic banana hai constructor ke andar
    constructor(fname,lname,salary){
        // console.log("m chal gya");
        this.firstname=fname;
        this.lastname=lname;
        this.salary=salary;
    }
    test() {
      console.log("some task");
      
    }
    
}
//ek blueprint ek skeleton bna ke tayar kar diya ise use kar sakte hai jitne baar bhi use karna hai ye fayda hai class ka object banane mai
let employe1=new DiceEmployees("kavita","pandey",10000);
console.log(employe1);
let employe2=new DiceEmployees("vishal","bhatt",20000);
console.log(employe2);

console.log(DiceEmployees);


