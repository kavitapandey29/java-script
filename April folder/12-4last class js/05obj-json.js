//object stringify- json convert (JSON.stringify)

let obj={
    firstname:"kavita",
    lastname:"pandey",
    age:22,
    getFullName(){
       console.log(this.firstname);//json mai function nahi aate
        
    }
}

let str=JSON.stringify(obj)
console.log(str);

//Json.parse
let str2=JSON.stringify(obj)
console.log(JSON.parse(str2));//json se object mai convert karne ke liye