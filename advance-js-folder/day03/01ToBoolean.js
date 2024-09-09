
// let obj1={
//     x:20,
//     valueOf(){
//         return 10
//     }
// }
// console.log(100-obj1);//100-10=90 (Subtract operator-100 tonumber 100return karega- obj1 tonumber call topremitive(object type) tostring valueof mathod banege array mai hint name ka variable aa jayega number / string .. value of 10)

// let obj2={
//     x:10,
//     toString(){
//         return"5"
//     }
// }
// console.log(100-obj2);//100-"5"->5=95

// let obj3={
//     x:10,
//     toString(){
//         return{}
//     }
// }
// console.log(100-obj3);//error


//! true-false  false-true
//falsy vlaue-undefine , null ,NaN, +0,-0,0, false ,"",document.all
//truthy --12,"name",.99

console.log(!undefined);//true
console.log(!null);//true
console.log(!false);//true
let str="";
console.log(!str);//true

if (null){
    console.log("truthy");
    
}else{
    console.log("falsy");
    
}//falsy(null falsy value -ToBoolean abstract operation ke andar)




