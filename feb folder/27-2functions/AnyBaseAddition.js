function anybaseadditon(b,n1,n2){
    let c=0;
    let rv=0;
    let p=1;

    while (n1>0|| n2>0 || c>0){
        let d1=n1%10;
        let d2=n2%10;
        n1=Math.floor(n1/10)
        n2=Math.floor(n2/10)
        let d=d1+d2+c;
       
        c=Math.floor(d/b);
        d=d%b;
        rv+=d*p;
        p=p*10;
    }
    return rv;
}

let ans=anybaseadditon(767,421,8)
console.log(ans);