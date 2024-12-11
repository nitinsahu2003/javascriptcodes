let a=7
// shortcut to create an array and then finding the factorial of the number
function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}
factorial(a)