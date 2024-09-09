//nested function
var a=10;
function testing (){
    // var a=10;
    //lexical scope
    function test(){
        console.log(a);
 }
 
    test();
    console.log("testing");
    
}
testing();

/*
l11
13--control
l4--
l5--output test
l9--output testing
test apne lexical scope ke andar dhundhega . phle body ke andar dhundhega wha nahi mila toh apne perameter ke andar dhundhega vaha nahi mila fir child to parent mai dhudhega wha se 10 mil gya.
global mai mil jayega toh output aayega 10.. ise lexical scope aur lexical environment.
*/