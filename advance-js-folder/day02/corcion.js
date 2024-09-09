
console.log("2"-1);//1
console.log("2"-"3");//-1 (-operator ke case mai Tonumber kaam karta ha)
console.log("2"+1);//21
console.log(1+"2");//12 (+ operator ke case mai Tostring method kaam karta hai)
console.log(1-"xyz");//1-NaN=NaN (1 primitive type ,xyz string convert hoga ToNumber mai toh invalid num dega)
console.log("2"-"xyz");//2-NaN=NaN (2 math no.,xyz string convert hoga ToNumber mai toh invalid num dega )
console.log(10.3-"15");//10.3-15(corcion operator ke uper depend karta hai , subtract operator ToNumber name ka premitive method chalata hai jo har output ko ToNumber mai convert karta hai, 15 convert hoga 15 no. ke andar)

console.log(12+null);//12+0=12
console.log("12"+null);//12+0=12null

console.log(10-undefined);//10-NaN=NaN

console.log(undefined-null);//NaN-0=NaN

console.log(null-false);//0-0=0



/*
undefined - NaN
Null-+0
Boolean-1,0
Number-return argument (number)
*/

let obj={}
    console.log(10-obj);
    



