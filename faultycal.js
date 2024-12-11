console.log("Faulty Calculator")
if(Math.random()<0.1){
    function addition(a,b){
        return a-b;
    } 
    function subtraction(a,b) {
        return a/b;
    }
    function multiplication(a,b) {
        return a+b;
    }
    function divison(a,b) {
        return a**b
    }
}else{
    function addition(a,b) {
        return a+b;
    }
    function subtraction(a,b) {
        return a-b;
    }
    function multiplication(a,b) {
        return a*b;
    }
    function divison(a,b) {
        return a/b;
    }
}
let a=addition(2,3);
let b=subtraction(4,3);
let c=multiplication(2,5);
let d=divison(10,5);

console.log("output of the operation is "+a)
console.log("output of the operation is "+b)
console.log("output of the operation is "+c)
console.log("output of the operation is "+d)