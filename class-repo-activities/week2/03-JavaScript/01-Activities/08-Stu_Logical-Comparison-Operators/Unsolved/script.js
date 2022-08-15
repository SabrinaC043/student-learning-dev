
// Arithmetic Operators
var a = "50"; //string value of 50//
var b = 50; //numeric value of 50//
var c = 100; //numeric value of 100//


var d = c % b; //d equals c remainder of b 0
var e = c / 2; //var 3 is 50//

//Comparison Operators// 



var expression1 = (b === e); // Strict Equality Operator// True both are numbers.
var expression2 = (e < d); // Equality Operator// false

// Use comparison operators so all expressions below log to the console as true
var a = 50; 
var b = 50; 
console.log(a === b); //false because one is a string and b is a numeric value// 
// Now it is true, I had to change a to a numeric value of 50.// 


// console.log(b !== e); // Not quality operator  50  equals the opposite of E which is c/2 100/50 equals 50//false//
// to make this true it should be 
console.log(b ==e); //True

console.log(c > b); //True 
// console.log(d > 0); //True

// Use logical operators so all expressions below log to the console as true
//Boolean T/F// 

//Logical Operators// 
//true                 false//

// console.log(expression1 && expression2);

//var expression1= (b===e) this is true 
// var expression2= (e < d); false 

var expression1 = (b == e)// true
var expression2 = (e !== d); //true 

console.log (expression1 && expression2); // True True 

            // false           true b/c of Not operator in expression1// 
// console.log( !expression1 || expression2);
console.log ( ! expression1 || expression2); // False True =True 


//logical nod- what is the value being held in my expression?

// Expression 1 is not true but as long as expression2 remains true= the expression will be true.
//  = is assignment operator
// = = is equality operator -focuses on value not data type
// === is the strict equality operator-focuses on value and data type. **recommded we use this one and stay away from equality operators**//
