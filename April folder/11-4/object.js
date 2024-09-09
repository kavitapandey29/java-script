
//obj second same object ka output dega
let obj={
    a:10,
    a:20,
}
console.log(obj);//20


let fn=0;
let sn=1;
for(let row=1;row<=4;row++){
    let ans="";
    for(let col=1;col<=row;col++){
        ans=ans+fn;
        let nn=fn+sn;
        fn=sn;
        sn=nn;
    }
    console.log(ans);
    
}