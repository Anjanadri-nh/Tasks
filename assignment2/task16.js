// remove duplicates

const valu=[1,2,3,4,5,5,5,6,7]

const arr =  [...new Set(value)]

console.log(arr)

//  Create parameterized method/function to multiply 3 numbers

let value = (a,b,c)=>
  a*b*c


console.log(value(1,7,8))

//. create parameterized method to divide 2 numbers
function index(a,b) {
    return  a/b
}
let value_1 = index(100,2);
 console.log(value_1)

//functions
 function myvalue(NAME ,AGE, CLASS,SECTION){
    // console.log(NAME,AGE)
    return {NAME,AGE, CLASS}

 }

 let x_1=myvalue("anjan","25", true)
 console.log(x_1)

 //arrow function
value=()=>{

    return "hello world"
}

//iife
(function(){
    function myfunction_q(a,b){
        return a*b
    }

})(1,2)

//regular functions

let y = (a,r,y)=>{
return a*r*y
}

let x_2 = y(1,2,3)
console.log(x_2)