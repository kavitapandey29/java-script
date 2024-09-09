//reference type
//new because of default constructor
let weakset=new WeakSet();
// console.log(weakset);


let obj={
    val:200
}
//value object form 
weakset.add({val:100})
weakset.add({val:100})
weakset.add(obj);// object bhi ja sakta hai
console.log(weakset);// same value ja sakti hai

//weakset size nahi hota

//has
console.log(weakset.has({val:100}));//false (reference type- {}different memory address)
console.log((weakset.has(obj)));//true (because same memory address)

//delete
weakset.delete({val:100})
console.log(weakset);// object is not delete because of the different memory address

weakset.delete(obj)
console.log(weakset);//object delete 

//java mai kisi memory ka address nahi nikal sakte





