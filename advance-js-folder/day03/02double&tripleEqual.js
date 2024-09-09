//== (1.type check , corcian(ToNumber ,ToString)) abstract equality operation
//===(1.type check , corcian nahi karta)

console.log(null==undefined);//true
//step1-type of x and y -- !(not)same

console.log(undefined==null);//true

console.log(12=="12");//12==12=true
//x=number ,y=string
//y=tonumber ()

console.log("12"==12);//true

console.log(false==0);//0==0=true
//x =boolean - tonumber (if argument is true ,return 1. if argument is false,return +0)

console.log(1==true);//1==1=true

let obj={
    x:0,
    valueOf(){
        return 10
    }

}
console.log("12"==obj);//12==10=false
//step1-type of x and typeof y = !same (if same send to===)
//x either str,num,sym - y is obj ,return ToPremitive-hint(variable)(string(toString ,valueOf) ,number(valueOf ,toString))

let obj2={
    x:10,
    toString(){
        return "25"
    }
}

console.log(obj2==10);//false
console.log(obj2==null);//false
//obj2-ToPrimitive -25  null=ToNumber (+0)

console.log("0"==null);//0==+0=false (it's not clear)


//strict equality ===

//x is different from y ,return false
console.log(null===undefined);//false

//if x is NaN ,return false
console.log(NaN===10);//false
console.log(10===NaN);//false

//NaN- false
console.log(NaN===NaN);//false
console.log("NaN"===NaN);//false

//+0===-0 , -0===+0 , -0===0- true
console.log(+0===-0);//true
console.log(-0===+0);//true
console.log(-0===0);//true

console.log(+0===0);//true
console.log(+0==="0");//false
console.log(-0==="0");//false








