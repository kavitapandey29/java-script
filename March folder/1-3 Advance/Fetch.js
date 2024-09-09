/*
fetch function mai ('url')
.then()function hai jo call back function lega
data raw formet mai milega jisko samajh nahi payenge jise bulb bolte hai ... fat arrow function...json function lenge json mai convert 
hua uske baad .then eK object hai results name ki property hai jo khud mai ek array hai
res ke andar .results ek array ke andar multiple objects pade hai gender object .gender chapenge
fetch .. json mai convert karna hai fir object milega uske sath data le sakte hai

ssyncrons code - purana chalega tabhi aage ko chalega
fetch().then(json).then()
*/
fetch('https://randomuser.me/api/')
.then(raw=>raw.json())
.then(res=>{
    console.log(res.results[0].gender);
})  

/*
axios pe get function url and then ek callback function
stdp ki request
*/
// axios.get('https://randomuser.me/api/').then(function (res ){
//     console.log(res.data.results[0].name.first);
// })
