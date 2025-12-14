// // let x= 5;
// // for (let i = 0;i<5;i++){
// //     console.log("this is ", i)
// // }

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

/* ++++++++++  5  +++++++++++++ */

const attendance = ["P", "A", "P", "P", "A", "P","P","P"];
function attendanceCounter(attendenceArray){
    let absentCount = 0
    let presentCount = 0
        if(Array.isArray(attendenceArray)){
            for (value of attendenceArray){
                if(value==="P"){
                    presentCount++
                } else if (value==="A"){
                    absentCount++
                } else{
                    console.log("There is invalid data in the attendence")
                }
            }
        }
        else {
            console.log("please provide an array")
        }
         if(((presentCount/(presentCount+absentCount))*100)>=75){
            return "Eligible"
         }
         else{
            return "Not Eligible"
         }
    }

console.log("The student is: ",attendanceCounter(attendance))

 /* ++++++++++  6  +++++++++++++ */

 const orders = [
  "pending",
  "delivered",
  "pending",
  "cancelled",
  "delivered",
  "pending",
  "new"
];

const unique=Array.from(new Set(orders))
const itemObject = {};
// console.log(unique)
unique.forEach((value)=>itemObject[value]=0)
const keys=Object.keys(itemObject)
    for(val of orders){
        if(keys.includes(val)){
            itemObject[val]++
        }
    }
console.log("Solution 6: ",itemObject)

/* ++++++++++  7  +++++++++++++ */

// const prompt = require('prompt-sync')();
const passwordToCheck = prompt('Enter Password:');
function passwordStrengthChecking(password){
    lowerCasePassword=password.toLowerCase();
    function doesContainNumber(password){
        for(let i=0;i<password.length;i++){
            if (!(Number.isNaN(Number(password[i])))){
                return true
            }
        }
    }
    console.log(doesContainNumber(password))
    
    if(lowerCasePassword!=password && password.length>=8 && doesContainNumber(password)===true){
        return "Strong"
    } else {
        return "Weak"
    }
}
console.log("solution 7 : ",passwordStrengthChecking(passwordToCheck))

/* ++++++++++  8  +++++++++++++ */

const transactions = [500, -200, 1000, -300, -100];
let totalBalance = 0;
let totalIncome=0;
let totalExpense=0;
for (val of transactions){
    totalBalance=totalBalance+val
    if(val<0){
        totalExpense=totalExpense-val
    } else{
        totalIncome=totalIncome+val
    }
}
console.log("solution 8 :")
console.log("Total Balance is : ",totalBalance)
console.log("Total Income is : ",totalIncome)
console.log("Total Expense is : ",totalExpense)

/* ++++++++++  9  +++++++++++++ */
const inventory = [
  { item: "Rice", stock: 20 },
  { item: "Oil", stock: 5 },
  { item: "Sugar", stock: 12 }
];
function inventoryAlert(inventory){
    let lowerInventories ="\n"
    for(val of inventory){
        if(val.stock<10){
            lowerInventories=lowerInventories+val.item+"\n"
        }
    }
    return lowerInventories;
}

console.log("solution 9 :",inventoryAlert(inventory))

/* ++++++++++  10  +++++++++++++ */
// const appointments = [
//   { start: "10:00", end: "11:00" },
//   { start: "11:30", end: "12:30" }
// ];
// const startTime = prompt('Enter Start time:');
// const endTime = prompt('Enter End time:');
// const appointment={start:startTime,end:endTime}
// console.log(appointment)
// function appointmentChecker(appointment,appointments){
    
// }

