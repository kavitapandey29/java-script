//x and y cordinate  .. det for mousemove 

var bdy=document.querySelector('body')
bdy.addEventListener('mouseover',function(det){
    console.log(det);
})

//q. give them all a different color
var btn=document.querySelectorAll('button')
for (let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
     btn[i].style.color="red"
    })
}
