//prototype se hum class bnane ke baad bhi field ya properties ko add ya remove kar sakte hai


class Employe{
    lastName="pandey";
    }
    //outside class with the use of prototype
    Employe.prototype.firstName="kavita";
    Employe.prototype.getFullName=function(){
        return this.firstName+" "+this.lastName;
    }
    let emp1= new Employe();
    console.log(emp1.firstName);
    console.log(emp1.getFullName());
    
    
   //prototype se native code mai bhi add kar sakte hai 
    let arr=[];
    console.log(arr);
    //prototype mai name
    Array.prototype.myname="kavita";