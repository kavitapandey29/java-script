var textarea=document.querySelector('textarea')
var counter=document.querySelector('#count')

textarea.addEventListener("input",function(){
    // console.log(textarea.value.length);
    counter.textContent=textarea.value.length;
})