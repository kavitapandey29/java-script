let obj={
    1:1,
}
let weakset=new WeakSet();
console.log(weakset);

weakset.add({1:10})
weakset.add({1:10})//same reference type and primitive type
weakset.add(obj);
console.log(weakset);

//has-true false
console.log(weakset.has({1:1}));//false
console.log(weakset.has(obj));//true

//non iterable
weakset.delete(obj);
console.log(weakset);//object delete 



let newset=new Set()
newset.add([10,20,30])
newset.add([20,30,40,50])
console.log(newset);
