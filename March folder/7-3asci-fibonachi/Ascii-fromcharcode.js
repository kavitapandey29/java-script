/** Q. print this pattern
 A
 BC
 DEF
 GHIJ
 */

 let ch="A".charCodeAt();
 for ( let row=1;row<=4;row++){
     let ans="";
   for (let col=1; col<=row ; col++){
     ans=ans+String.fromCharCode(ch);
     ch++;
 
   }  
   console.log(ans);
 }
/*
loop on row  and col
let empty string on""
cha="A" ko ascii code mai change karne ke liye .charCodeAt() lagayenge
ans ke andar add karte jayenge+ String.fromCharCode(ch) 
ch no. hai 65+1 is 66 
66 ke coresponding hai b toh woh ans mai aa jayega
*/

 let cha="A".charCodeAt();
 for ( let row=1;row<=1;row++){
     let answ="";

   for (let col=65; col<=90 ; col++){
     answ=answ+String.fromCharCode(col);
    //  cha++;
    console.log(answ);
   }  
 }
