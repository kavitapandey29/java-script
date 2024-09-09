/*first make three promises here we only catch resolve
setTimeout-- second baad function chal jayega
async code --sabse phle priority queue mai jayega so time ke hisab se code chalega
first sync code chalega fir async --Eg.L41 and L9
 */


for (let j=100;j<=200;j++){
    console.log(j,"before promises wala code");
    
}
let promise1=new Promise((resolve,reject)=>{
setTimeout(function(){
    resolve("ho gaya")
},4000)
   
})
promise1.then((data)=>{
    console.log(data);
    
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("ho gaya2")
    
    },1000)
  
})
promise2.then((data)=>{
    console.log(data);
    
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("ho gaya3")
    
    },2000)
})
promise3.then((data)=>{
    console.log(data);
    
})

console.log("after promises wala code");
for(let i=1;i<=100;i++){
    console.log(i);
    
}
