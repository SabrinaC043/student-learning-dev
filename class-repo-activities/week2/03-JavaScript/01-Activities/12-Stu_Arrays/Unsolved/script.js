// create an array of students//

 var studentName= ["Trisha","Hailey","Scott", "Andy", "Leigh", "Leah" , "Tara" ];

console.log(studentName.length);

console.log("Welcome to class " + studentName [0] + " .");
console.log("Welcome to class " + studentName [1] + " .");
console.log("Welcome to class " + studentName [2] + " .");
console.log("Welcome to class " + studentName [3] + " .");
console.log("Welcome to class " + studentName [4] + " .");
console.log("Welcome to class " + studentName [5] + " .");
console.log("Welcome to class " + studentName [6] + " .");

studentName[0]= "Devin";

if (studentName==="Trisha") {
    console.log(studentName[0] + " is still in class.");
}
else { 
    console.log (studentName[0]  + " is in class.");

}