var form =document.querySelector('form');
// var inp1=document.querySelector('#inp1');
// var inp2=document.querySelector('#inp2');


//html elements ka array
var inps=document.querySelectorAll('input[type="text"]')
var h1=document.querySelector('h1')
//html ki all property aa jati hai
//prevent Default se page reload nahi hota jisse java script chalti hai
//.trim() space ko validate hone se rokne ke liye
form.addEventListener("submit",function(ev){
 ev.preventDefault();

 for(var i=0;i<inps.length;i++){
    if(inps[i].value.trim()===''){
        h1.textContent="error ! some field are missing";
        h1.style.color="red"
        break;
    }
    // else{
    //     console.log("validated");
    // }
 }






















 //submit fire karne par for each loop lagega sare element pe ghumega 

// inps.forEach(function(elem){
// if(elem.value===''){
//     h1.textContent="error ! some field are missing";
//     h1.style.color="red"
//     // console.log(elem);
//     // console.log("error");
// }else{
//     console.log("validated");
// }
// })
















//  if (inp1.value===''|| inp2.value===''){
//     // console.log("error");
// h1.textContent="error ! some field are missing";
// h1.style.color="red"

//  }else{
//     // console.log("validated")
//     h1.textContent="";

//  }
})