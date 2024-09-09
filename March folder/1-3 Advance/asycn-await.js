/*
agar asycncronus code sycncronus code ki tarah chalana hai toh wha pe async await lagega
*/

console.log("hello world");
console.log("hello me");
async function fun(params) {
    console.log("mai async wala code hu phir bhi mai chal gya async await ki wajah se ");
    let data = await fetch('https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(res=>{
        console.log(res);
    })
   
}
fun();
console.log("hello snow");
console.log("hello white");

/*async code ko sync
 */
console.log("hello world");
async function getUserData(url){
    console.log("i am incide function");
    await fetch(url)
    .then(raw=>raw.json())
    .then(res=>console.log(res))
    console.log("i am after fetch api");
}
getUserData('https://randomuser.me/api/')
console.log("hello dice");