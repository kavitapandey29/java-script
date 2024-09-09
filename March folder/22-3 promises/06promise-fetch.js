//restcountries api end endpoint 
//REST Countries
//return kar rahe toh resolve ho gya
//data ko convert kar rahe hai into json

let response=fetch(' https://restcountries.com/v3.1/all')
.then((data)=>{
return data.json();
    
    
}).then((dt)=>{
    console.log(dt);
    
}).catch((error)=>{
    console.log(error);
    
})