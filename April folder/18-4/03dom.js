//children ,sibling m nodelist , prev ,next

// html element parent - .parentNode  .parentElement
//document-initial node
let para=document.getElementById("para")
console.log(para.parentNode.parentNode.parentNode.parentNode.parentNode);//div //body //html //#document //null

console.log(para.parentElement.parentElement.parentElement.parentElement);//div root  //body  //html //null


//html child- childNode , children (ilterate)
let list=document.getElementById("root2")
console.log(list.childNodes);//element textspace count
console.log(list.children);//htmlcollection (nodelist (element+dom) )


