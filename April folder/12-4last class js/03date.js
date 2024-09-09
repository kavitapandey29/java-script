//date - 1970 
//js date naam ka object hota hai - native class , global class , prototype

let dt=new Date();
console.log(dt);//present date and time
console.log(dt.__proto__);//(prototype){}

let time1= dt.getDate();
console.log(time1);//date

let time2=dt.getMonth()+1;
console.log(time2);//month (index 0 start (so +1))

let time3=dt.getFullYear();
console.log(time3);//year

let time4=dt.getHours();
console.log(time4);//time

let time5=dt.getSeconds();
console.log(time5);


let date=Date.now();
console.log(date)//date mili second


let dat=Date.parse("05-10-2023")
console.log(dat);//1970 se mili second
