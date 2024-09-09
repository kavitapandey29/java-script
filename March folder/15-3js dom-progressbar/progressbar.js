var dowloadBar=document.querySelector('#downloadBar')
var progress=document.querySelector('#progress')
var h3=document.querySelector('h3')


var count=0;
let int=setInterval(function(){
    //progress bar ko 100% complete hone ke baad stop karne ke liye clear interval use karenge with the id (int)
    if(count==99){
        clearInterval(int)
        h3.style.opacity=1;
    }

    count++;
    progress.style.width=count+"%";
    
},100)