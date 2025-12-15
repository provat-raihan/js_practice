

/* ++++++++++  1  +++++++++++++ */

const expenses = [120, 45, 300, 180, 90];

expenses.sort((a,b)=>b-a)

let total = 0;
let i=0
for (;i<expenses.length;i++){
    total= total+ expenses[i]
}
// console.log("solution 1","The highest expense in the array is : ",expenses[0])
// console.log("the total expense is :",total)
// console.log("the  average is :",(total/i))

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
// console.log("solution 2")
// loginVerification(users[0].username,users[0].password)
// loginVerification(users[1].username,users[1].password)
// loginVerification(users[0].username,users[1].password) // should print invalid

const username = "admin"
const password = "1234"
// loginVerification(username,password)
// this is from user input


/* ++++++++++  3  +++++++++++++ */



function numberFormatter(num){
    
    if(Number.isNaN(Number(num))){
        console.log("please provide a number")
    }else{
    if(num.length==11){
        let formatNumber = "+88"+ num;
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
const num = '01521331717';
// console.log("solution 3")
// numberFormatter(num)

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
if(totalCartValue>50000){
    totalCartValue = totalCartValue-(totalCartValue * 0.1)
}
// console.log("solution 4")
// console.log("Total cart Value is : ", totalCartValue)
// console.log("Total cart Value after discount is : ", totalCartValue)

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

// console.log("The student is: ",attendanceCounter(attendance))

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
unique.forEach((value)=>itemObject[value]=0)
const keys=Object.keys(itemObject)
    for(val of orders){
        if(keys.includes(val)){
            itemObject[val]++
        }
    }
// console.log("Solution 6: ",itemObject)

/* ++++++++++  7  +++++++++++++ */

const passwordToCheck = "1111111aaaaAAA";
function passwordStrengthChecking(password){
    lowerCasePassword=password.toLowerCase();
    function doesContainNumber(password){
        for(let i=0;i<password.length;i++){
            if (!(Number.isNaN(Number(password[i])))){
                return true
            }
        }
    }
    function doesContainAlphabet(password){
        for(let i=0;i<password.length;i++){
            if (Number.isNaN(Number(password[i]))){
                return true
            }
        }
    }
    
    if(lowerCasePassword!=password && password.length>=8 && doesContainNumber(password)===true && doesContainAlphabet(password)===true){
        return "Strong"
    } else {
        return "Weak"
    }
}
// console.log("solution 7 : ",passwordStrengthChecking(passwordToCheck))

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
// console.log("solution 8 :")
// console.log("Total Balance is : ",totalBalance)
// console.log("Total Income is : ",totalIncome)
// console.log("Total Expense is : ",totalExpense)

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

// console.log("solution 9 :",inventoryAlert(inventory))

/* ++++++++++  10  +++++++++++++ */

const appointments = [
  { start: "10:00", end: "11:00" },
  { start: "11:30", end: "12:30" }
];
const appointment={ start: "09:30", end: "10:01" }

const bookedTime =[];
for(val of appointments){
   
   bookedTime.push([timeFormatter(val.start) , timeFormatter(val.end)])

    }

function appointmentChecker(appointment,bookedTime){
    let conflict= false ;
   const appointmentStartTime=timeFormatter(appointment.start)
   const appointmentEndTime=timeFormatter(appointment.end)
   for(let i =0;i<bookedTime.length;i++){
    if((bookedTime[i][0]<appointmentStartTime && appointmentStartTime<bookedTime[i][1]) || (bookedTime[i][0]<appointmentEndTime && appointmentEndTime<bookedTime[i][1])){
      return  conflict=true
    }
    else{
        return conflict
    }
   }
}
function timeFormatter(time){
    let hr ;
    let min;
    let splitTime=time.split(":")
    for(let i=0;i<splitTime.length;i++){
        if(i==0){
            hr=Number(splitTime[i])*60;
        }
        if(i==1){
            min=Number(splitTime[i])
        }
    }
    return hr+min;

}
// console.log("Solution 10:","does the appointment conflict?: ",appointmentChecker(appointment,bookedTime))
