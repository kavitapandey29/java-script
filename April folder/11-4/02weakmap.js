//weakmap

let weakmap=new WeakMap();
// console.log(weakmap);//WeakMap size nahi dega

//set--as many as same value
weakmap.set({key:1},10);//key:object form({key:1}object hai ,10 primitive datatype hai dono alag memory address pe banega )
weakmap.set({key:1},10);
weakmap.set({key:1},10);
console.log(weakmap);
console.log(weakmap.size);//undefine (iska size nahi hota )

//has
console.log(weakmap.has({key:1}));//false (l7 becuse of that ans is false)

let obj={
    key:1,
}
weakmap.set(obj,10);//same memory address pe banega
console.log(weakmap.has(obj));//true


//delete-
let newmap=new WeakMap();
let obj1={
    key:1,
}
newmap.set(obj1,100);
newmap.set({key:2},200);
newmap.set({key:3},300);
newmap.delete(obj1)//delete the obj
console.log(newmap);

//iterate-loop nahi lga sakte WeakMap mai

//object key ki tarah react karega
let wkmp=new WeakMap();
let obj2={
    key1:1,
    key2:2,
    key3:3,
    key4:4,
}
wkmp.set(obj2,1000)
console.log(wkmp);



