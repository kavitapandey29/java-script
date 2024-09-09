/**
 * fundamentals
 * 1> intro to js, variabless,conditionals,loops ,object , array, function, scope , closure , oops, new , this
 * 
 * 2> js DOM , DOM BOM API , local storage , feach , axios, 
 */

/**
 * Advance js-
 * High order function
 * callbacks 
 * callback hell
 * inversion of control
 * Promises
 * Promise Hell
 * Promise vhaning
 * Asyn Await
 * Asyn behavior of JS
 * scope
 * closure
 * JS engine internal
 * Constructor
 * class and object
 * inheritence
 * prptotypes
 * prptotypal inheritence
 * scopes 
 * closure
 * coerction - type casting
 */

//loop- initiate , conditional , update (1 true +5v)( 0 fulse -5v)

//for>> phle se pta ho kon sa loop lagana hai waha for loop lagega

for(let i=1;i<=10;i=i+1) {
    console.log("Kavita",i);
}


// //Q- 1 se 100 tak no. print
for(let i=0; i<=100; i=i+1){
    console.log(i);
 }

//while>> don't know kitni jagah loop lagana hai
//i=eltrater

//Q - name 50 times put here
//51 mai i name veriable value 1 >> while loop condition check >> 53-if true we come under loop >>updation condition (i) value 1+1
// let i=1;
// while(i<=50){
//    console.log("kavita");
//    i=i+1;
//  };


//>>>>>>java code- top to bottom >>>>>left to right (RUN)

//do while loop only works in one time
//Q-name 50 times put here
//while-mai condition 
 let j=1;
 do{
     console.log("mine");
     j=j+1;
 }
 while(j<=50)


//Q-entry control loop and exit control loop difference

/**
 * break- pass wale loop se exit karega
 * continue- wo wali eltraterion ko skip kardeta hai
 */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>break

//Q-loop 1 to 10 number print 
//ram>>>i name variable value 1(i=1) ; check condition if it's true then under the loop(i<=10) ; 
// then print i=1
//break>> loop exit
// for(let i=1;i<=10;i=i+1){
//     console.log(i);
//     break;
// }
// console.log("exit from loop");


//double loop
//ram>>> i name variable value 1(i=1) ; 1<=10 so condition true
//ram>>> j name variable value 1(j=1) ; 1<=200 so condition true
//then log (1,1)
//break
//then again in first loop i=2 ; 2<=10 so conditon true 
//then again in second loop j=1 ; 1<=10 so condition true 
// because of break
//in first loop 1 to 10 number print 
for(let i=1;i<=10;i=i+1){
    for (let j=1;j<=20;j=j+1){
        console.log(i,j);
         break;
   }
 }


//ram>> i name variable isme value 1 >>i=1
//then check the condition condition is true  >> i<=10
//ram>> loop j name variable value with 1 >>j=1 ; checking condition 1<=5 true ; 
//ram>> k name's variable value with 1 >> k=1 ; checking conditon 1<=15 so it's true 
// in log value of i,j,k,>>>> so (1,1,1)
// then 110 j++ >> so j value will be 2 >>> j=2
//k=1 >> 1<=15
//value of i,j,k, (1,2,1)
// because of break k loop will be work only one time
// let i=1;
// while(i<=10){
//     for(let j=1;j<=5;j++){
//         for(let k=1;k<=15;k++){
//             console.log(i,j,k);
//             break;
//         }
//     }
//     i=i+1;
// }
// console.log("loop se bahar");


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>continue
//== comparision
/**
 * ram >> i(var)=1(value)
 * 1<=10 true condition
 * print(mate)
 * 2==5 false condition
 * if falue so "continue" will not work 
 * then log (hye)
 * then again loop >> i(var)=2(value)
 * 2<=10 true condition
 * print(mate)
 * 2==5 false condition
 * if falue so "continue" will not work
 * then again loop >> i(var)=5(value)
 * 5<=10 true condition
 * print(mate)
 * 5==5 true condition
 * then "continue" will work
 * 5 bottom ilteration will be skipped but only one becaue of == to
 */
 for(let i=1;i<=10;i++){
     console.log("mate",i);
     if (i==5){
         continue;
    }
 console.log( "hye");
 }


/**
 *ans- hey 1 loop over
 * hey 2 loop over
 * because of continue 
 */
 for (let i=1;i<=10;i++){
    console.log("hey",i)
    continue;
    console.log("name",i);
 }


//Q. 1 to 10 odd and even number
//% modulus operator >>remainder 
//2 se cut hoke comes 0 so anser will be even else odd
for (let num=1;num<=10;num++){
    if(num%2==0){
        console.log("even",num);
    }else{
        console.log("odd",num);
    }
}


/***
 * Ram>> num name variable with "7" count name variable with "0"
 * then loop div name's variable with value "1" ; condition is true then come under loop
 * 7 divided by 1 == 0 condition true 
 * count value increased by 1;
 * now count value is 2;
 * next loop>> count2 > 2 , condition false
 * then else 7 prime 
 * output will be 7 prime
 * */                                                                                                                                    
//Q. number is prime or not
let num=7;
let count=0;
for(let div=1;div<=num;div++){
    if (num%div==0){
        count=count+1
    }
}
if (count>2){
    console.log("not prime ",num);
}else {
    console.log("prime",num);
}

//other method
let number=10;
let counte=0;
for(let div=2;div<=number-1;div++){
    if (number%div==0){
        counte=counte+1
        break;
    }
}
if (counte==0){
    console.log("prime ",number);
}else {
    console.log("not prime",number);
}

/**
 * num name variable ;lower limit to upper limit ; and number will increased by 1(it will print number 10 to 100)
 * then conditionals>> divided by 2 ; num-1; div will increased by 1
 * check>> if number modulus with div then come 0
 * if number will cut so count value increased by one 1;
 * break
 * if count greater then 0 so not prime else prime
 */
//Q. 10 to 100 search for Prime and not prime no.
let ll=10;
let ul=100;
for(let num=ll;num<=ul;num=num+1){
    let coun=0;
    for (let div=2;div<=num-1;div=div+1){
        if (num%div==0){
            coun=coun+1;
            break;
        }
    }
    if (coun>0){
        console.log("not prime",num);
    }else{
        console.log("prime",num);
    }
}