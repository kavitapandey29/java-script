//error- 2 types of error
//1-error jo application ko crash kar dete hai 2- jise handle kar sakte hai
//error-handling
//try-catch-finally-throw new Error
let b=20;
let a=10%b;
console.log(a);
//try and catch -try mai code dalna hai agar error hoga toh catch mai pakad lega

try{
    let d=-1;
    let c=20/d;
    if (b<=0) {
        //custom error
       throw new Error("b ki value nagative nahi honi chahiye") 
    }
    console.log(c);

}
catch(error){
    console.log(error);
    //error mai msg name ki property hoti hai
    console.log(error.message);

}
//finally chalega hi chalega chahe try mai error de chahe catch mai
finally{
    console.log("chahe kuch ho jaye mai chalunga hi chalunga");
    
}



