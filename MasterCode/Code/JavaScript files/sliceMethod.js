/*
slice() - Extracts a section of a string and returns it without
          modifying the original string. 
*/

let fullName;
let firstName;
let lastName;

fullName=window.prompt("What your Full Name?");
firstName=fullName.slice(0,fullName.indexOf(" ")); //slice(0,index of space) as the index of space is not included
lastName=fullName.slice(fullName.indexOf(" ")+1); //slice(index of space + 1,end) as the start index is included

console.log(firstName);
console.log(lastName);