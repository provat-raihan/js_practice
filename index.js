// let x= 5;
// for (let i = 0;i<5;i++){
//     console.log("this is ", i)
// }

/* ++++++++++  1  +++++++++++++ */

const expenses = [120, 45, 300, 180, 90];

expenses.sort((a,b)=>b-a)
console.log("solution 1","The highest expense in the array is : ",expenses[0])

let total = 0;
let i=0
for (;i<expenses.length;i++){
    total= total+ expenses[i]
}
console.log("the total expense is :",total)
// console.log(i)
console.log("the  average is :",(total/i))

/* ++++++++++  2  +++++++++++++ */

const users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "abcd" }
];

function loginVerification(username,password){
    if(username==="admin"&& password==="1234" ){
        console.log("Login successful")
    }else if(username==="user"&& password==="abcd" ){
        console.log("Login successful")
    } else {
        console.log("Invalid credentials")
    }
}
console.log("solution 2")
loginVerification(users[0].username,users[0].password)
loginVerification(users[1].username,users[1].password)
loginVerification(users[0].username,users[1].password) // should print invalid

const prompt = require('prompt-sync')();
const username = prompt('What is your username? ');
const password = prompt('What is your password? ');
loginVerification(username,password)
// this is from user input


/* ++++++++++  3  +++++++++++++ */



function numberFormatter(num){
    
    if(Number.isNaN(Number(num))){
        console.log("please provide a number")
    }else{
        // stringNum=num.toString();
    if(num.length==11){
        let formatNumber = "+88"+ num;
        // console.log(formatNumber)
        let firstPart =formatNumber.slice(0,4)
        let secondPart =formatNumber.slice(4,7)
        let thirdPart =formatNumber.slice(7,10)
        let forthPart =formatNumber.slice(10)
        let finalFormatted = firstPart+"-"+secondPart+"-"+thirdPart+"-"+forthPart
        console.log(finalFormatted)
    } else {
        console.log("Please provide valid number with 11 digits")
    }
    }
    
}
console.log("solution 3")
const num =prompt('what is the number to format?  ');
// console.log(typeof(num))
numberFormatter(num)

/* ++++++++++  4  +++++++++++++ */

const cart = [
  { name: "Laptop", price: 5000, qty: 1 },
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1500, qty: 1 }
];
let totalCartValue = 0;
for (let i=0;i<cart.length;i++){
    totalCartValue=totalCartValue + cart[i].price * cart[i].qty
}
console.log("solution 4")
console.log("Total cart Value is : ", totalCartValue)
if(totalCartValue>50000){
    totalCartValue = totalCartValue-(totalCartValue * 0.1)
}
console.log("Total cart Value after discount is : ", totalCartValue)