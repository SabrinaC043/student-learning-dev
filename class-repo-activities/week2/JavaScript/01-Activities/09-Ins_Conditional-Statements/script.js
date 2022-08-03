

var hungerLevel = 50;
var isLunchTime = true;
var lunchBill = 11;

// If statement
// Evaluates to true so "Hungry" is logged
// if is a reserved keyword in JS//


//use conditional statements to add ... look up at 2:34 time stamp cst.//
// (parans is your condition () it has to be true because if not it will not run the code block.//
// if () {
// }

//hungerLevel is greater than or equal to 50//
if (hungerLevel >= 50) {
  console.log("Hungry!");
}

// Evaluates to false so nothing is logged
if (hungerLevel <=50) {
  console.log("Hungry!");
}
// Do we expect above statement to be in the console? No because it is not.
// You have to make the if statement arithmetic operator to true by saying <= //
// // Else statement 
// // Evaluates to true so "Lunchtime" is logged

//if this true and the value block is truthy then enter Not lunchtime in the code block// 

if (isLunchTime === true) {
  console.log("Lunchtime"); 
} else { //else statement// 
  console.log("Not Lunchtime");
}

// // isLunchTime is another way of writing "isLunchTime === true"
// if (isLunchTime) {
//   console.log("Lunchtime!!");
// } else {
//   console.log("Not Lunchtime!!");
// }

// // Evaluates to false so "It's Lunchtime Already" is logged
if (!isLunchTime) {
  console.log("Not Lunchtime Already!!");
} else {
  console.log("It's Lunchtime Already !!");
// }
// if statement is looking for a inverse return -> does false equal a true? NO, return false. 
//In a conditional if statement exists it is going to run first statement then the second because of the else// 



// // Else if allows you to test more than one condition
// // The first condition is false, so the second condition is evaluated. Logs "Cost Rating: $$""

//if lunchBill is less than ten then we can say it is cheap. or if the lunchBill is grater than ten and less than 15 it is mid priced. 
//note we don't see the code block at the bottom because it says based off of those other conditions it can process and be $$$.//


if (lunchBill < 10) {
  console.log("Cost Rating: $");
} else if (lunchBill >= 10 && lunchBill < 15) {
  console.log("Cost Rating: $$");
} else {
  console.log("Cost Rating: $$$");
}
 //last else is the last stop// visit at 2:51pm// 