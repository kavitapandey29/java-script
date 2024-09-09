//async - aisa task jo kuch time baad chalega
/*
setTimeout
setInterval
fetch 
axios
promises
*/

//setTimeOut-window -- callback function ,5000(number)
//callback queue , sidestack

setTimeout(function(){
    console.log("hello");
    
},2000);


//setInterval-window -- callback function,2000(numebr)[particular interval mai function ko baar baar chalata rahega]
let rv=setInterval(function(){
    console.log("kavita");
    
},2000);

clearInterval(rv);


//fetch Api--async functionality, kisi remote url pe jake waha se data leke aata hai,data esi form mai aa rha hai jise padh ni sakte , convert into json function and.then function , iske andar callback function data aayega object form object ke andar .then lagake jate hai- form []
//randomuser.me

fetch( 'https://randomuser.me/api/')//data 
.then(raw=>raw.json())//callback function json convert
.then(res=>{ //.then with callback function res 
    console.log(res.results[0].gender);
    
});


//axios- http library - devloper afficiante- json mai convert kiye bina use kar sakte hai - form{} 
//axios npm
axios.get('https://randomuser.me/api/')
.then(res=>{
    console.log(res);   
})

//async code - callback queue - output main-callstack 