var add= document.querySelector('#add')
var remove=document.querySelector('#remove')
var inp=document.querySelector('input')
var ul=document.querySelector('ul')

addEventListener("click",function(){
 var li=this.document.querySelector('li')

 let val=inp.value;
 ul.appendChild(li)
 
})