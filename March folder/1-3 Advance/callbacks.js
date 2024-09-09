/*
hyoder function call back function >> function ke andar function pass kar dena parent function chal gya tabhi callback function chalega
control main function ke pass hai
b chalega tabhi aage ka function chalega
*/

function fun(a,b){
  b();

}
fun(10,function(){
  console.log("i am callback function");
})

/*
function > getUserData 2parameter(url,callback)
data fetch(url)
.then json mai liya (raw=>raw.json())
.then ko result mai
function ko invoke karenge function ke name se >getUserData(url,callback function dena hai)
depend on parent call back ko karna hai run(res)
log mai (res)
 */

function getUserData(url,callback){
  callback()
  fetch(url)
  .then(raw=>raw.json())
  .then(res=>{
    //callback(res)
    
  })
}
//fun(res)
getUserData('https://randomuser.me/api/',function fun(){
  console.log("mai esa function hu agar mere parent ne mujhe invoke kiya tabhi mai chalunga");
 // console.log(res);
})


