//post-fix - use , update
let x =10;
console.log(x++);
console.log(x);


//pre-fix  -update , use
let y=20;
console.log(++y);
console.log(y);

let z=30;
console.log(++z + ++z + z++);


// and or not (true or false)
// && operator multification -  true=1 and false=0 ans. 0(false) -  true=1 and true=1 ans.1(true)
console.log("------------&&");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//short circuting - and gate k andar agar ek bhi input false aajaye toh tabhi woh false krke bahar aajayega aage wali condition ko nahi check karega

console.log(false && true && true && true || false && true);



//or operator ||  (jodna)
console.log("---------||");
console.log(true||false);
console.log(false||false);
console.log(false||true);
console.log(true||true);



//not - true ka false and false ka true
console.log("----------!");
console.log(!true);
console.log(!0);
console.log(!null);


//truthy and falsy value

//falsy= false, +0, null.undefine,"",document.all
//truthy=name ,12 , true , obj any other value
let name="kp";
console.log(!name);
