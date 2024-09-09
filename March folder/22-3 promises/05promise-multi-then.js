/*
then bhi khud mai ek promise return karte hai-- waha se agar data diya hoga tabhi uske niche wale code chalenge 

* agar multipal then chalane hai toh upar wale then se hame return karna padega --parent ko
*return data;

*multipal then honge but catch nahi honge
**** throw new Error se hum custom many error throw kar sakte hai but in prectice ek hi error hoga

*if data got resolved so it will not goes to reject
*/

let promise= new Promise((resolve,reject)=>{
    resolve("resolved")
    reject("some rejected maal")
})

let p=promise.then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
   
    /**/
}).catch((error)=>{
    // console.log(error);
    throw new Error("mera custom error");
}).catch((error)=>{
    console.log(error);
    console.log("second error");
    throw new Error("mera custom error");
    
}).catch((error)=>{
    console.log(error);
    console.log("third error");
    
})
