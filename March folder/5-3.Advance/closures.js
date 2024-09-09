//Closures - ek aisa function jo ek dusra function return karde usko closures bolte hai
// ek aisa function jo callstack se khatm ho chuka h tab bhi uski details/variables value tum child function mai use kar sako
//ram ke do hisse hote hai stack memory and heap memory
var count=0;
function counter(){
    count++;
    console.log("hello world");
}
counter();


//
function abcd(){
    var x=10;
    return function xyz() {
        console.log(x);
    }
}
let rv=abcd()
rv();


//f1 ka kaam pura hone ke baad bhi chalega
//call stack empty hone ke baad bhi function ki kuch value ya dusri details heap mai store ho jati hai vahi clousers hai
//jise parent ka child use kar pata hai
var z=100;
function f1(){
    var y=10;
    function f2() {
        console.log(y);
        console.log(z);
    }
    f2()
}
f1()