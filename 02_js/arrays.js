// array today i finished it all
const myArray = [5 , 45 , 54, 54, 45 ,"swami " ,"Chaudhari", [3 ,5 ,4 ,54]]
console.log(myArray);
console.log(myArray.push(0,27));
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.unshift(6));
console.log(myArray);

const newArray = myArray.join()
console.log(newArray);

console.log("----------------------------------------------------------------------------------------------")


// slice and splice
const arrayOne = [3,4,3,2,1,4,4,1,6,5,3]
const arrayTwo = arrayOne.slice(0,3);
console.log(arrayTwo);

const arrayThree = arrayOne.splice(0,2)
console.log(arrayThree);


console.log(arrayOne);