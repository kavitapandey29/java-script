//ek function jo ek dusra function khata hai, callback
//us wale callback ki wajah se hi tumhara main wala function---- dependent 
// callback ke andar kitne bhi function pass kar sakte hai
//callback hell or inversion of control or pyramid of Doom
//java script single threaded hai --ek time pe ek hi kaam
/*issues of Callbacks
1-- readability issue--the code become hard to read 
2--making changes and debugging is time-consuming
3--inversion of control--all control is on parent hand
4--callback hell--call-back ke andar ek callback callback ke andar ek aur callback
*/
function test (callback){
    callback()

}
test(()=>{
    console.log("test");
    test(()=>{
        console.log("test2");
        test( () => {
          console.log("test3");
          test( () => {
            console.log("test4");
            test( () => {
              console.log("test5");
              test( () => {
                console.log("test6");  
              })    

            })    

          })   

        })    

    })

})