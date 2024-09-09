var home=document.querySelector('#home')
var about=document.querySelector('#about')
var contact=document.querySelector('#contact')


var hometext=document.querySelector('#hometext')
var abouttext=document.querySelector('#abouttext')
var contacttext=document.querySelector(' #contacttext')

var h3=document.querySelector('h3')



home.addEventListener("click",function(){
    textremove();
    hometext.style.display="block"
  
})


about.addEventListener("click",function(){
    textremove();
    abouttext.style.display="block"
})


contact.addEventListener("click",function(){
    textremove();
    contacttext.style.display="block"
})


function textremove() {
document.querySelectorAll('h3').forEach(function(val){
    val.style.display="none"
   })
    
   };