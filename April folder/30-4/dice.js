
// let player1num=Math.floor(Math.random()*6)+1;
// let player2num=Math.floor(Math.random()*6)+1;


// if(player1num>player2num){
//     //dom-innertext - player 1 wins

// }else if(player1num<player2num){
//     //dom-inner text -player 2 wins
// }else{
//     //dom inner text draw
// }

// window.location.reload();

function rollDice(){
    let de1=document.getElementById("de1");
    let de2=document.getElementById("de2");
    // let result=document.getElementById("result");
    let d1=Math.floor(Math.random()*6)+1;
    let d2=Math.floor(Math.random()*6)+1;
 
    de1.innerHTML=d1;
    de2.innerHTML=d2;

   if(d1>d2){
    innerHTML='player 1 wins';
   }else if (d1<d2){
    innerHTML='player 2 wins';
   }
   else{ innerHTML='draw'};
   



    
   

   }
 








