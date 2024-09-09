
function fun (){
    let x=10;
    function func(){
        console.log(x);
        
    }
    func();
}

fun();//10(yaha parent element mai hai)function phle apne andar dhughega wha nahi mila toh fir parent mai dhundhega wha bhi nahi mila toh fir global mai dhudhega
