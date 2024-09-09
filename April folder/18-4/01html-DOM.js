
let heading=document.getElementById("heading");
// console.log(heading);
heading.style.backgroundColor="red";//css
console.log(heading.classList);//console (classlist)

heading.className="green";
console.log(heading.classList);//.className se class override (red1 red2 red3 override by green here)

heading.classList.add("pink");
console.log(heading.classList);//old html class preserve rakhne ke liye


let btn=document.getElementById("Btn");
// console.log(btn);

//innertext ,

btn.innerText="click here";
console.log(btn);//textual data to html

//innerhtml
let para=document.getElementById("para");

// para.innerHTML="<span>hey</span>";
// console.log(para);//hey

let para2=document.getElementById("para");
console.log(para2);//1para hi pakdega

//html inline css
let btns=document.getElementById("Btn");
btns.className="green";
console.log(btns);//btns class aa gayi green

//class,tag same

let para3=document.getElementsByTagName("p");
console.log(para3);//catch the element

for(const el of para3){
    el.className="red";//red css
}

for(let i=0;i<para3.length;i++){
    para3[i].className="new";//new css
}











