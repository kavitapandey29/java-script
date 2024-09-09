// promise -- object
//pending--waiting

let promise= new Promise((resolve,reject)=>{
// resolve("biscuit de diya mujhe")
reject("nahi hai")
})

// promise .then((data)=>{
// console.log(data);

// })
promise .catch((error)=>{
console.log(error);


});
