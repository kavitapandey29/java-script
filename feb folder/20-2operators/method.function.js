//normal function- global window object
//mehod= window es5 parent object
let obj={
    name:"kavita",
    parent : function () {
        console.log(this);
        function child() {
            console.log("hello i'm child");
        }
        child();
    }
}
obj.parent()

//es6- parent
let obj2={
    name:"jhone",
    parent : function(){
        console.log(this);
        let child=() =>{
            console.log(this);
        }
        child();
    }
}
obj2.parent();