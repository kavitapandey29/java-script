//8758%10=8 last digit
//786%10=6
//785/10=78.5

/**
 * floor
 */

//Q. count no. 
function countDigits(num){
    let count=0;
    while(num>0){
        let=num%10;
        count=count+1;
        num=Math.floor(num/10)
    }
    return count;
}
let rv=countDigits(5552132)
console.log(rv);

//no. print reverse 1234 
//no. print 1 2 3 4 