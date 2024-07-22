const user = {
    username : "swami" ,
    peice :33 ,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website `);

    }
}
 
user.welcomeMessage()    //swami welcome to website 
user.username = "raj"
user.welcomeMessage()     //raj welcome to website   

console.log(this);



// arrow function 

const addTwo = (num1 , num2) => {                   //or               const addTwo = (num1 , num2) => num1 + num2
    return num1 + num2                                                                //or
}                                                       //             const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(3,3))
