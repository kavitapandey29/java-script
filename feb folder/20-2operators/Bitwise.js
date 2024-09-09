// Bitwise operator = aise operator hai jo bits pe chalte hai
//105 decimal in binory = 1101001
//bitwise mai 5 operators = bitwise and , bitwise or , bitwise not , left shift ,right shift



/*100 and 105 ko convert karega binary mai fir ek ek bit pe kaam karega*/
let a= 100;
let b= 105;
console.log(a&b);
console.log(a|b);
//left shift
console.log(b>>2);

//conditional(ternary) Operator(?)
//conditon ? t1:t2

let age =20;
let name="kavita"
age==20 &&  name=="kavita"? console.log("hello kavita"): console.log("error");