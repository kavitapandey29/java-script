//catch the previous and next element

let root=document.getElementById("root");

//sibling
console.log(root.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);//#text(because of wide area after root ) //a //#text //p //#text 

console.log(root.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);//a //p //script//script //null 

//previous and next
console.log(root.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling);//#text  //a  //#text //p //#text //null

console.log(root.previousElementSibling.previousElementSibling.previousElementSibling);//a //p //null



