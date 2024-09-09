/*decimal to anybase
634 -10 ===== ()-8
*/
/*
make a function ek number aur ek base 
then number 0  then return
loop jab tak number mai jaan hai tab tak chalega
number ko last se todna n%b;
*/

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
let val=DecimalToAnyBase(634,8);
console.log(val);
/*
Dry Run que 1
n=634
b=8
line 12- ans =0
13 - p=1
14 loop n>0 - true
15 dig=634%8=2
16 n=n/b 634/8=79
18 ans = 0+2*1=2
p=1*10=10

n>0 79>0 true
dig = 79%8== 7
n=n/b 79/8=9
ans=2+7*10=72
p=10*10=100

n>0 9>0true
dig=n%b 9%8 ==1
n=n/b 9/8 ==1
ans= 72+1*100=172
p=100*10=1000

n>0 1>0 true dig =n%b 1%8 =1
n=n/b 1/b 1/8 =0
ans = 172+(dig)1*1000=1172
p=1000*10=10000
n>0 0>0 false
119 return ans=1172
122 val = 1172
log 1172
*/

// anybasetoDecimal Octal to decimal 8 ki power 0 se1

function AnyBaseToDecimal(num,base){
    let answer=0
    let power=1;
    while(num>0){
        let digit=num%10;
        num=Math.floor(num/10);
        answer=answer+digit*power;
        power=power*base;

    }
    return answer;
}
let value =AnyBaseToDecimal(72,8)
console.log(value);


//anybasetoanybase