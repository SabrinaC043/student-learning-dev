// Change the values and operators below to test your algorithm meets all conditions


var x = 50; //Numeric value of 50
var expression1 = (x < 25); // Bollean if 50 is less than 25, this is false.// 
var expression2 = (x >= 50); // Bollean if 50 is greater than 50, this is false.
//  changed to true but it needs to be false so step three you need to invert this. 
// If you want it true it needs to add the =//


// Write Your JavaScript Code Here


// Note for first step of this assignement// 

//expression1===true && expression2== true) {console.log {"True ✅ True ✅"}; //

if (!expression1 === true && !expression2==true)

{
console.log ("True ✅ True ✅");

}
else if (expression1 && expression2);
  {
    console.log ("True ✅ False ❌");
} 

else if (!expression1===false && !expression2==true);
 {
           console.log ("False ❌ and True✅");

} 
else (expresssion1 ===false && expression2===false) ;
{
 console.log ("False ❌ and ❌  False")
}

// Questions for technical words: 
// What is a Node? 
// An environment where all devices are accesible through the network. Point of interwsection or connection within a data communication network.
// ! Inverts the number of what it is placed in front of.  //  
// Not Selector


// Plan for writing an algorithm is to start with the expressions first and then make sure to comment out the information so I can proceed bit by bit.//




// A switch statement evaluates an expression, matching the expression's 
//value against a series of case clauses, and executes statements after the 
// the first case clause with a matching value, until a break statement
// is encountered. The default clause of a switch will be jumped to no case matches the expression value. 
//
// example of Syntax for switch (expression) { case x: // code block case clause..} 
// helpful for large number of cases.
// 