/**
 * array and object
 * 
 * object >> multiple data >> key + value
 * primitive datatype = value
 * reference datatype = address
 */

let age1 =24;
let age2=age1;
console.log("age 1",age1);
console.log("age 2",age2);



/**
 * if we changed in obj1 so obj2 will not changed
 * because it was stored in different ram memory block
 */
let obj1={
    name:"megha",
    age :23
}
let obj2=obj1;
console.log("before");
console.log("obj1",obj1);
console.log("obj2",obj2);
 obj1={
    name:"rohan",
    age :35
}
console.log("after");
console.log("obj1",obj1);
console.log("obj2",obj2);