//>>>>>>>>>>>>>>>>>>>>>>>>>>> array 

// let marks1=33
// let marks2=44
// let marks3=55
// let marks4=66
// let marks5=77
// let marks6=88
// let marks7=99

/* {},[],()- reference data type (ram mai different address)
 array takes index[] and it starts from 0th index 33 is 0, 44 is 1 like that only
*/

// indexing so ans is 33
let marks=[33,44,55,66,77,88,99]
console.log(marks[0]);
//describe length of array
console.log(marks.length);

//Print whole array
let mark=[33,44,55,66,77,88,99]
// for(let i=0;i<mark.length;i++){
//     console.log(mark[i]);
// }
//forEach loop ke elements pe ghumta hai
mark.forEach(function(val){
    console.log(val);
})

//forEach(callbackfn: (value: number, index: number, array: number[]) 
let arr=[10,20,30,40,50,60,70,80]
arr.forEach(function(val){
    // it works with element
    console.log(val);
    console.log("kavita");
})

// length of array will be print here
let array=[10,20,"demon",45,5.5,"elena"]
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//length of array will be print here by using for each loop
//forEach loop work according to no. of element
array.forEach(function(val){
    console.log(val);
})

/*
undefine , not define ,null
undefine- value 
not define- error
*/

// undefine- value
let name;
console.log(name);

//not define
console.log(define);

