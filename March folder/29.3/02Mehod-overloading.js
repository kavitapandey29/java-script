
//Method-Overloading--esa function jinke signature (function name) same hai but kaam argument different- different hai..
//java script mai method overloading nahi hoti 
//method overloading inheritence ka part nahi hai

class Area{
    //squre ka area
    area(side){
        return side*side;
    }
    //rectangle ka area
    area(length,breath){
        return length*breath
    }
}

//upar wale ko memory nhi mili memory tab milegi jab class ka koi instence ya object banega

//java script mai method -overloading nahi hoti isiliye log area mai 1st argument ko access karne ki koshish kar rha hoga isse phla wala function NaN ho jayega access hoga second wala so 2nd f mai hum 2parametr pe log karenge toh hame area(100) mil jayega..
let ar=new Area();
// console.log(ar);
console.log(ar.area(10));//NaN
console.log(ar.area(10,10));//100

