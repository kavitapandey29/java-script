function anybasetoAnybase(n,b1,b2){
    let dec=AnyBaseToDecimal(n,b1)
    let ans=DecimalToAnyBase(dec,b2)
    return ans;
}
function DecimalToAnyBase(n,b){
    let ans=0;
    let p=1;
    while(n>0){
        let dig=n%b;
        n=Math.floor(n/b);
    
        ans+=dig*p;
        p=p*10;
    }
    
    return ans;
    }

    function AnyBaseToDecimal(n,b){
        let ans=0;
        let p=1;
        while(n>0){
            let dig=n%10;
            n=Math.floor(n/10);
        
            ans+=dig*p;
            p=p*b;
        }
        
        return ans;
        }

let val=anybasetoAnybase(172,8,2)
console.log(val);

/*
1 - n=172, b1=8, b2=2 
2 - n=172, b1=8 return - dec
3 - dec- decimal code convert , b2=2
4 - return - ans
34- function catch in val
*/
    
