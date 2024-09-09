
console.log(window);//window
console.log(this);//window
console.log(a);//undefine
testing();//error

                      
//excution phle kar liya define declare baad mai kiya   
// function expression                 
var a =10;
var testing=function testing(){
    console.log("testing");
    
}

//GEC
//phase 1-- parsing memory--properly formatted variable memory(let var const)
//phase 2-- excution -- values

//hoisting - variable var keyword and normal function ke sath => function ke sath nahi kyunki return mai parent element deta hai

/*GEC
Memory Phase--

window {}
this {}
a -- key value pair
testing-- key value pair

Parsing Phase--
Window-- Window {}
This--Window {}
a--undefine
testing--undefine---error
*/


//TDZ-Temporal dead Zone--gec ke andar memory aur code ke excution ke phase ko tdz bolte hai eg.-- here in this code becaue of let shows some uninsilalised error

// testing();//error

                                    
// let a =10;
// var testing=function testing(){
//     console.log("testing");
    
// }

