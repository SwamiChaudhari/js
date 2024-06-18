// two ways to create object
//singleton ----- 
// object.create  1] this method called constructors


//-------------------------------------------------------------------------------------//
// 2] object literals 

const jsUsers = {}
console.log(typeof(jsUsers));

const mySym = Symbol("key1")

const myObj = {
    name : "Swami",
    "full name" : "Swami chaudhari" ,
    date : 16 ,
    [mySym] : "key1",
    add : "csn" ,
    Email : "Swami1642004@gmail.com" ,
    isLoggedIn : false 
}

Object.freeze(myObj)
myObj.Email = "swamichaudhari@gmail.com"


console.log(myObj.name);
console.log(myObj.Email);
console.log(myObj["date"]);
console.log(myObj["full name"]);

console.log(myObj[mySym])
console.log(typeof[mySym])


console.log(myObj)