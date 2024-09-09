//string-imutable mutable 
//string prototype String
//string array  ki tarah hi kaam karti hai

let str="kavita";
console.log(str[2]);//v
console.log(str[10]);//undefine

str[1]="z";
console.log(str);//kavita (k ki jagah z nahi aaya kyunki string imutable hoti hai)

//array mutable hote hai
let arr=[10,20,30];
arr[1]=100;
console.log(arr);//[10,100,30]


//string

let name="kavita pandey";
console.log(name.length);//13
console.log(name.charAt(10));//d
console.log(name.charAt(name.length-1));//y

//string slice (start,end) start -inclusive(include) end- exclusive(-1)
console.log(name.slice(2,9));
console.log(name.slice(1));
console.log(name.slice(0,8));
console.log(name.slice(-4,-2));//left to right (positive indexing)-01234 right to left(nagative indexing) --1-2-3-4-5


//hw- string ko slice karke reverse print 
function slice(name) {
    console.log(name="kavita pandey");
}
console.log(name.slice(-1, -name.length - 1, -1));
console.log(name.split("").reverse().join(""));


//substring , substr
//nagative indexing is not working in substring
let name2="kavita pandey";
console.log(name2.substring(2,8));
console.log(name2.substring(-9,-5));//empty(negative index is not working in substring)
console.log(name2.slice(-9,-5));

//substr
console.log(name2.substr(-9,-5));// empty(negative index is not working in substring)

//ascii code 0,1

let str2=" ";
console.log(str2.charCodeAt(0));//32

console.log(String.fromCharCode(65));//
console.log("-------------------------------");


/*
print this
A
A B
A B C
A B C D
A B C D E

q-2 lower and upper case differenciate
ViKas ChauDhaRy

q-3 upper-lower case
lower upper case

*/

for (let i = 65; i <= 69; i++) {
    let str = " ";
    for (let j = 65; j <= i; j++) {
      str += String.fromCharCode(j) ;
    }
    console.log(str);
  }











