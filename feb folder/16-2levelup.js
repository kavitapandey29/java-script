//16-2-2024

//decimal 
//binory
//optal
//hexadecimal

/* this keyword
   call 
   apply
   bind
   object
   array >>> container >> for different value store

 */

 // >>>>>>>>>> 1
//    let arr=["vikas",23,true,[1,2,3],'x']
// //    for(let i=0;i<=arr.length;i++) {
// //     console.log(arr[i]);
// //    }
// arr.forEach(function(val){
//     console.log(val);
// })

  // arrays length so ans is 1,2,3,x

/*>>>>>>>>>>>> 2
antity value
var > kavita
array object >> hetrogeneous type >> any value
object ko access karte hai . operator se
function call karna hai toh breket
har function kuch return karta hai kuch return nahi karega to undefine dega
*/
// let kavita={
//     name:"kavita",
//     Age:23,
//     address:"delhi",
//     sayHello:function(){
//         console.log("hello world");
//     }
// }
// console.log(kavita.address);
// console.log(kavita.sayHello());

/*ans. delhi, hello world, undefine
 */

/*
object mai>> array, object ,function , var , property >> access karenge . se
*/
let tv={
  size:"50",
  make:"lg",
  display:"hd",
  price:50000,
  movie:function(){
    console.log("I'll Play Movie");
  },
  arr:["online class","movie","tv"],
  obj:{
    a:12,
    b:35,
    somefun:function(){
      console.log("somefun");
    }
  }

}
console.log(tv.size);
console.log(tv.make);
console.log(tv.display);
console.log(tv.price);
console.log(tv.movie());
console.log(tv.arr);
console.log(tv.obj);
console.log(tv.obj.somefun());





   




