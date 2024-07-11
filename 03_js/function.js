function myName(){
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")

}

myName()

function addition(num1 , num2){
     console.log(num1 + num2 );
}
const result = addition(4,4);
console.log(`result is ${result}`);


// for print all in array
function calculateAll(...num1){
    return num1;
}
console.log(calculateAll(100,23,314,432,325,35))