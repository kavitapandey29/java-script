let drums=document.querySelectorAll(".drum");
// console.log(drums.length);

for(let i=0;i<drums.length;i++){
    drums[i].addEventListener("click",function(event){
        event.preventDefault();
        console.log("beats");
        //this-current context innerhtml-html text
        var innerHTML=this.innerHTML;
        console.log(innerHTML);
        playSound(innerHTML);
        // buttonAnimation(innerHTML)

        //stop
        playSound.currentTime=0;
    });

}

function playSound(key){
    switch(key){
        case"beat1":
            var beat1=new Audio("sounds/01.wav")
            beat1.play();
            // break;
        case"beat2":
            var beat2=new Audio("sounds/09.wav")
            beat2.play();
            // break;
        case"beat3":
            var beat3=new Audio("sounds/03.wav")
            beat3.play();
            // break;
        case"beat4":
            var beat4=new Audio("sounds/04.wav")
            beat4.play();
            // break;
        case"beat5":    
            var beat5=new Audio("sounds/08.wav")
            beat5.play();
            // break;
        case"beat6":
            var beat6=new Audio("sounds/06.wav")
            beat6.play();
            // break;
        case"beat7":
            var beat7=new Audio("sounds/07.wav")
            beat7.play();
            break;
        default:
            var moyemoye=new Audio("sounds/moye-moye.mp3")
        moyemoye.play();
            setTimeout(()=>{
                moyemoye.pause()
            },15000)

        }

}






// document.addEventListener("keypress",function(event){
//     playSound(event.key);
//     buttonAnimation(event.key);
// });
// function buttonAnimation(currentKey) {

//     var activeButton = document.querySelector("." + currentKey);
  
//     activeButton.classList.add("pressed");
  
//     setTimeout(function() {
//       activeButton.classList.remove("pressed");
//     }, 100);
  
//   }


