//useful string properties and methods 

let Name;
let phone;

Name="Darsh Jain";
phone="995-896-3296";

console.log(Name.length);
console.log(Name.charAt(4));
console.log(Name.indexOf("a"));
console.log(Name.lastIndexOf("a"));

let firstName="    Darsh    ";
console.log(firstName.trim()); //remove blank spaces

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

console.log(phone.replaceAll("-"," "));
console.log(phone.replaceAll("-"," & "));
