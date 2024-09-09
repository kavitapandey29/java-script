//async and await for async code ko sync ki tarh chalane ke liye
//fetch ka wait nahi kiya sync code phle chal gya

async function getCountries(){
console.log("fetch se phle");

    let response = await fetch("https://restcountries.com/v3.1/all");
    console.log("fetch ke baad");
    
    let rowdata = await response.json();
    console.log(rowdata);
  }
  
  getCountries();