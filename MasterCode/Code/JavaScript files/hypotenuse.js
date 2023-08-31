//Calculating the hypotenuse of a right triangle.
let base;
let height;
let hypotenuse;

document.getElementById('button').onclick=function(){
    base=document.getElementById('base').value;
    height=document.getElementById('height').value;
    hypotenuse=Math.pow((base**2 +height**2),0.5);
    document.getElementById('hypo').innerHTML="The hypotenuse of the given triangle is: "+hypotenuse;
}