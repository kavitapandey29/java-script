/*
input object--ToPremitive{input[,preferredType]}
input - boolian , number ,string, array,object (js ke native code only)

input type ToPremitive{input[,preferredType]} method chalega
a-if preferredType is not present ,let hint be "default"
b-else if preferredType is hint string ,let hint be "string"
c-Else preferredType is hint number, let hint be "number"
d-if hint is "default",set hint to "number"
e-ToPrimitive ne ToNumber ke pass bheja tha , ToPrimitive "odinary to primitive" ke pass bhejega

if it's not an object return simple input

"odinary to primitive"(input,hint(number,string))
hint- "string"-[toString , toValue]
hint- "number"-[toValue , toString]
for each loop array pe lagta hai

*/
//object ke andar 2 function--toValue , toString

let obj={}
console.log(obj.toString());//[object object]--(error,resolve-iski value ko override karke)
console.log(typeof obj.toString());//string(object object is string)
console.log(obj.valueOf());//{}

//error resolved - by value override
let obj2={
toString(){
    return "chacha";
},
valueOf(){
     return "100";
}
}
console.log(obj2.toString());
console.log(obj2.valueOf());


let obj3={}
console.log(100-obj3);//100-NaN=NaN(substract 100 ToNumber =100 , obj ToNumber chlate hai toh ToPremitive ke andar jata hai- defalut --"OrdinaryToPrimitive " tostr,tovalue -- obj3-tostr=[obj obj]-- obj obj -tovalue -"string"=NaN)

//toString Method override

let obj4={
    toString(){
        return 10;
    }
}
console.log(100-obj4);//90


//valueOf Method override

let obj5={
    valueOf(){
        return "10";
    }
}
console.log(100-obj5);//100-10=90 (OrdinaryToPrimitive-- valueof"10" string)


//
let obj6={}
let obj7={}
console.log(obj6-obj7);//NaN-Nan=Nan(argument type- object ->ToPremitive-string-> OdinaryToPrimitive->toString- obj6 [object object] valueOf -NaN)

//method override

let obj8={
    toString(){
        return 10;
    }
    
}
let obj9={
    valueOf(){
        return "90";
     }
}

console.log(obj8-obj9);//-80
console.log(undefined-obj8);//NaN

