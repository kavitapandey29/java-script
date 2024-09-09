//array destructure ,object

let arr=[100,200,300,400,500,600]
// let a=arr[0];
// let b=arr[1];
// let c=arr[2];
// console.log(a,b,c);//[100,200,300]

let [a,b,...c]=arr; // we want c array form (rest operator)
console.log(a,b,c);//100 200 300
//array destucture globally use kar sakte hai


//create destructure object
let obj2={
    d:10,
    e:20,
    f:30,
    g:40,
    h:50,
    i:{
        name:"kavita",
    }
}
// let x=obj2.d;
// let y=obj2.e;
// let z=obj2.f;
// let z2=obj2.g;
// console.log(x,y,z,z2);//10 20 30 40

let {d,e,...f}=obj2;
console.log(d,e,f);//10 20 {f:30 g:40 h:50 i:{name:'kavita'} } 


//nested object destructure
let object={
 
        firstname:"kavita",
        lastname:"pandey",
        age:27,
    
}

let {firstname:name,lastname}=object;
console.log(name,lastname);//firstname ke bajay:name (name se accsess kar sakte hai)


//nested destructure
let obj3={
    name:{
        firstname:"kavita",
        lastname:"pandey",
    },
    age:22,
    salay:10000,
}

let {name:{firstname},age}=obj3;//for nested destructure {:{}}
console.log(firstname,age);


//obj loop (ilterate)
let obj4={
    x:100,
    y:200,
    z:300,
}
// for(const key in obj4){
//     console.log(key,obj4[key]);//x100  y200  z300
    
// }

//another way.. object.key(obj)--for object keys
console.log(Object.keys(obj4));//(3)['x', 'y', 'z']
for(const maal of Object.keys(obj4)){
    console.log(maal);// x y z
    
}


//Object.values
console.log(Object.values(obj4));//(3) [100,200,300]
for (const newmaal of Object.values(obj4)){
    console.log(newmaal);// 100   200   300 
    
}


//key value pair -- entries
console.log(Object.entries(obj4));//(3) [Array(2)]
for(const saman of Object.entries(obj4)){
    console.log(saman);//(2) ['x',100] ['y',200] ['z',300]
    
}

