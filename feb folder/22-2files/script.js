//      html manipulation

// var btn=document.getElementById ('btn1')
//     console.log(btn);

// var h1=document.getElementsByClassName('h1')
// console.log(h1);

// var para=document.getElementsByTagName('p')
// console.log(para);

// var btn=document.querySelectorAll('button')
// console.log(btn);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>contentchanged through textcontent=>  "" string 
var mybtn=document.querySelector('button')
mybtn.textContent="starting";

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>contentchanged through innerhtml=> inner html ka code
var heading1=document.querySelector('h1')
heading1.innerHTML='<i> name </i>'

// css manipulation

let para1=document.querySelector('p')
para1.style.color="red";
para1.style.fontsize="40px"


let para2=document.querySelector('#pic')
para2.classList.add('col')
para2.style.fontsize="50px"
para2.classList.remove('col')
para2.style.color="magenta";
para2.style.fontsize="100px";
para2.style.bakground="#pink";

var head2=document.querySelector('#heading2');
head2.textContent="my world";
// + karke add = karke replace


// htmltag using js  appendChild - jodna
var head3=document.createElement('h3')
document.querySelector('body').appendChild(head3)
head3.textContent="kavita"

//img tag
var image=document.createElement('img')
document.querySelector('body').appendChild(image)
image.src="https://images.unsplash.com/photo-1695128782705-e8a6a49ea5ed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
image.style.height="150px"
image.style.width="150px "