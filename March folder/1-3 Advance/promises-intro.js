/*
promises - do kaam from fetch
new promiese -> callback function -> resolved ,reject
async callback  (ssyncronus code- control humare hath mai hai) 
fetch('url')
raw ko convert karna hai json mai 
.then se result name ke function se access kar sakte hai
data de diya toh resolve  warna reject
vayda .then nibhana(resolve) .catch vayda na nibhana(reject)
call back q - side stack pe process hoga chalega main call stack
tikega nahi apne aage wala task chale ga

*/
console.log("this")
console.log("is")

 const vayda=new Promise(function(resolve,reject){
    fetch('https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(res=>{
        if(res.results[0].gender==="female"){
            resolve();
        }
        else{
            reject();
        }
            
     })
})
    vayda.then(function(){
        console.log("wo mere liye chips le ke aa gya");

    })
    .catch(function(){
        console.log("raste mai aate aate mar gaya");
    })

console.log("my")
console.log("world")