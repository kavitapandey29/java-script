//variable ka apne scope hota hai let var const

/*rest and spread operator

*spread-- faila dena
*rest-- bind
--rest multipal array ko ek array mai convert kar dega
*/

// function add(a,b){
//     console.log(a+b);
    
// }
// add(10,20,50,90)


//rest value array ke andar deta hai
function add(...args){
    console.log(args);

    let sum=0;
    for (let i=0;i<args.length;i++){
        sum+=args[i]
    }
    console.log(sum);
    
}

add(10,20,30,40,50,60);


//...spread
// let arr1=[10,20,30]
// let arr2=[...arr1]
// console.log(arr1);
// console.log(arr2);

//output-- [10,20,30] [10,20,30]


//...spread
let arr4=[10,20,30]
let arr5=[10,20,...arr4]
console.log(arr5,"spread");

//output[ 10, 20, 10, 20, 30 ]

//...spread
//ram ke andar different memory block mai gya hai that's why output[ 10, 20 ][ 10, 20, 30 ]
//pop is for removing last array 
let arr1=[10,20,30]
let arr2=[...arr1]
arr1.pop()
console.log(arr1);
console.log(arr2);



//10 a , undefine b
//10+undefine= NAN
//10+NAN=NAN
// function add(a,b){
//     console.log(a+b);
    
// }
// add(10)

 function add(...argu){
      console.log(argu);
        
     }
    add(10,20,30,40,50,"function add")


 //object : aate hai
 //object with spread operator
 //ram mai same memory address pe gye honge dono toh ek mai reflect honge toh dusre mai bhi woh change aayega , agar different memory block mai gye honge toh change aayega
 let obj1={
    name:"kavita",
    age:27,
 } 
 let obj2={...obj1} 
 console.log( obj1);
 console.log(obj2);
 obj1.marks=75; 
 console.log( obj1);
 console.log(obj2);

 
 
 