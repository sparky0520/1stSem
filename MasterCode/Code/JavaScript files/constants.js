// const: a variable that cant be changed
// naming convention is that we name all CAPS.
const PI=22/7;
let radius;
let circumference;

document.getElementById('button').onclick=function(){
    radius=document.getElementById('input').value;
    circumference=2*PI*radius;
    console.log("the circumference is "+circumference);
    document.getElementById('ans').innerHTML='The circumference of the circle is: '+circumference;
}
