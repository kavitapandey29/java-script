//DOM selector - querySelector , querySelectorAll


let para=document.querySelector("#para");
console.log(para);//sirf first para
para.className="green"//class add green 

//queryselectorall

let paras=document.querySelectorAll("#para");
console.log(paras);//NodeList

//ilterate
for (const el of paras){
    console.log(el);
    el.className="red";//change into red
    
}

for(let i=0;i<paras.length;i++){
    paras[i].className="new";//change into new
}


//create element using js
let div=document.getElementById("root");

let h2=document .createElement("h2");
h2.innerText="hello world from dom";
h2.innerHTML="<span>hye, I'm from Dom</span>"
console.log(h2);
div.append(h2);
console.log(div);

//nodelist
let h3=document.createElement("h3");
h3.innerText="hello world I am append and prepend ";
let root2=document.getElementById("root2");

root2.appendChild(h3);//append child last mai add karta hai
root2.prepend(h3);//suru mai add karega



