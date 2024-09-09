/*
genrater - function ka control humare hath mai aa jata hai
*/



function* print(){
    console.log("started")
    yield 1;
    console.log("printed one");
    yield 2;
    console.log("printed two");
    yield 3;
    console.log("printed three");
    
}
let gen=print()
console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


/* */
function* printcount(){
    yield 1;
    for (i=1;i<=10;i++){
        console.log(i);
    }
    yield 2;
    for (j=1;j<=10;j++){
        console.log(i);
    }
    yield 3;
    for (k=1;k<=10;k++){
        console.log(i);
    }
}
let genr =printcount();
console.log(genr.next().value);
console.log(genr.next().value);
console.log(genr.next().value);