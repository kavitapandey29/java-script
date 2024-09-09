//Map

let map=new Map();
// console.log(map);


//map.size
// console.log(map.size);

//set-key ,value
//L4,5 mao key same hone par second value return karega
map.set(1,10);
map.set(2,20);
map.set(3,30);
map.set(4,40);
map.set(4,50);
console.log(map);
console.log(map.size);//1

//get

console.log(map.get(2));//20
console.log(map.get(50));//undefine (get from key)

//map.has-true false(map major key ka use karta hai)

console.log(map.has(4));//true
console.log(map.has(40));//false

//map.delete--for delete the key

map.delete(3)
console.log(map);

//map.clear--for delete full map
map.clear();
console.log(map);

//iterate-map ki value ko nikalana

console.log(map.keys());

let newmap=new Map();
newmap.set(1,10);
newmap.set(2,20);
newmap.set(3,30);
newmap.set(4,40);
newmap.set(5,50);

//iterate
for(let value of newmap.keys()){
    console.log(value);
    
}

//map.values()--for value

console.log(newmap.values());//map iterator (iske uppar loop lga sakte hai)

//values
for(const value of newmap.values()){
    console.log(value);//10,20,30,40,50
  
}

//key value pair - map.enteris()

console.log(newmap.entries());//MapTterator(loop)
for(const value of newmap.entries()){
    console.log(value,"value");//[1,10],[2,20],[3,30],[4,40],[5,50]
    
}

//Set--dublicate value nahi leta 

let set=new Set();
// console.log(set);//set(0)

set.add(2);//vlaue leta hai
console.log(set);
set.add(2);
console.log(set);//dublicate values nahi lega --set

//array-reference type ka hai different memory address jata hai --non premitive type ka hai
set.add([10,20,30]);
console.log(set);
set.add([10,30,30]);
console.log(set);
set.add(2)
console.log(set);//premitive type


//iterate -- set
console.log(set.size);//3

//iterate mathod- set.values
console.log(set.values());//SetIterator(we can use loop)
for(const value of set.values()){
    console.log(value);//2 [10,20,30] [10,30,30]
    
}

//set delete, clear

set.delete(2);
console.log(set);//3
console.log(set.size);//2 

set.clear()
console.log(set,set.size);//size-0











