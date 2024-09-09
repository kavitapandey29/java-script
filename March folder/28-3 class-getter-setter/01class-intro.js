// class syntax
//class ki property-fields

// class ClassName {
//     //fields
//    firstname="kavita";
//    lastname="pandy";
// }

//function ke aage function nahi lagana
//object ke andar let var const nahi lagana
//class ko chi ek variable ke andar store kar sakte hai
let Employe=class{
    firstname="kavita";
    lastname="pandey";
    //har class ke andar by default ek constructor hota hai
    //constructor --kuch banana
    //by default constructor hota hai 
    //constructor ek baar chalta hai ek object mai constructor ek baar chalega jab intense-object banaya jayega uska
    //constructor ke andar 2 parameter pass karke let employee pakad sakte hai
    constructor(fname,lname){
        console.log("constructor call");
        this.firstname=fname;
        this.lastname=lname;
        
    }
    getfullname(){
        return this.firstname+" "+this.lastname;

    }
}
//class ban gyi hai but memory nahi mili hai
//memory tab banegi jab memory iski banayenge
//new keyword se koi bhi nyi chij new keyword se hi bnta hai
let empl=new Employe();
// let emp2=new Employe();
console.log(empl);
// console.log(emp2);



let employe=new Employe("puneet","chaudhary");
console.log(employe);

let employe2=new Employe("ashish","rathor");
console.log(employe2);

let employe3=new Employe("kavita","pandey");
console.log(employe3);

