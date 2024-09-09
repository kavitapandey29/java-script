let fn=function(){
    btn.style.backgroundColor="green"
}



var btn=document.querySelector('button')
btn.addEventListener('click',function(){
    btn.textContent="starting in........."
    btn.style.color="red"
})

btn.addEventListener('mouseover',fn)

btn.addEventListener('mouseleave',function(){
    btn.style.backgroundColor="#fff"
})

var head1=document.querySelector('h1')
head1.addEventListener('mouseover',function(){
head1.textContent="MY WORLD"
})

