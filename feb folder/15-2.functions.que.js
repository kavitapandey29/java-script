//function

//1.Q.function print the prime no.

function prime(ll,ul,){
    for(let num=ll;num<=ul;num++){
        let count=0;
        for (let div=1;div<=num;div++){
            if (num%div==0){
                count =count+1;
            }
        }
        if (count>2){
            console.log("not prime",num);
        }
        else{
            console.log("prime",num);
    }

    }
}
prime(10,50)


function multitest(ll,ul){
    for (let num=ll;num<=ul;num++){
        if(num%3==0){
            console.log("multi of 3",num);
        }
        else if (num%5==0){
            console.log("multi of 5",num);
        }
        else if (num%7==0){
            console.log("multi of 7",num);
        }
        else{
            console.log("invalid");
        }
    }
}
multitest(10,100)



