//problem statement -1 class ke kitne object bante hai jab bhi new object banega class ko new memory milegi
//count 1 ,1 aata rahega  object mai new new memory banti thi
//toh static keyword use  toh iski property ko class name se bhi access kar sakte hai , class level pe ek hi memory banegi
//object mai counting 0 se baar baar start hoti hi static se ++ hota rahega memory ek hi baar show hogi
class Employe {
    //static for class
     static count=0;
    firstName;
    lastName;
    getFullName(){
        return this.firstName+""+this.lastName
    }
    constructor(){
        //this. nahi chalega this hota hai object ke liye
       Employe.count++ //ab chalega class ke naam se 
    }
}

let emp1 = new Employe();
let emp2 = new Employe();
let emp3 = new Employe();
let emp4 = new Employe();
let emp5 = new Employe();
let emp6 = new Employe();

// console.log(emp1.count);
console.log(Employe.count);//class name se access


//--------------------------------------------------------------------------------------------------------------------------------------
//class level ke sath
class Kaam{
    //static
   static firstname="kavita";
   static lastname="pandey";
   static getFullname(){
    //this for object for class level use class
    return Kaam.firstname+" "+Kaam.lastname;
    }
}
let kaam1=new Kaam();
console.log(Kaam.firstname);
console.log(Kaam.getFullname());

