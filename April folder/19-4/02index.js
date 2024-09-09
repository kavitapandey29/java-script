//2

let btn=document.getElementById("btn")
btn.onclick=function clickMe(event){
    console.log("i am clicked by onclick");
    console.log(event);//for different event object cordinates for same tag here its button
    console.log(event.target);//for element
    console.dir(btn);//button directory
}

//3
let btn2=document.getElementById("btn2");
btn.addEventListener("click",function(event){
    console.log("i am clicked by addeventlistner");
    console.log(event);
    console.log(event.target);
    
    
});

