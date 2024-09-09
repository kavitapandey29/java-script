//stopwatch
let timer=document.getElementById("stopwatch");
console.log(timer);
let ss=0;
let mn=0;
let hr=0;
var stoptime=true;

function timerf(){
    if(stoptime==false){
    ss=parseInt(ss)
    mn=parseInt(mn)
    hr=parseInt(hr)

    ss=ss+1;

    if(ss==60){
        mn=mn+1;
        ss=0;
    }
    if(mn==60){
        hr=hr+1;
        ss=0;
        mn=0;
    }


    timer.innerHTML=hr+":"+mn+":"+ss+":";

    setTimeout(timerf,10);

}  
}

//start
function start(){
    if(stoptime==true){
        stoptime=false
        timerf();
    }
    
}

//stop
function stop(){
    if(stoptime==false){
        stoptime=true;
        timerf();
    }
}

//reset
function reset(){
    timer.innerHTML='00:00:00';
    stoptime=true;

    ss=0;
    mn=0;
    hr=0;

}