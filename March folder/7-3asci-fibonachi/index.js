// callback as async task

console.log("hello world");
console.log("hye");
for (let i=1;i<=10;i++){
    console.log(i);
    
}
setTimeout (function (params) {
    console.log("i am inside settimeout");
},2000);
console.log("dice");
console.log("academy");
