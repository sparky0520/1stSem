/*
let username;
username=window.prompt("Whats your name ?");
window.alert("Hello " + username);

*/
let username;

document.getElementById('button').onclick=function(){
    username = document.getElementById("input").value;
    console.log('Hello '+ username);
    window.alert('HELLO ' +username);
    document.getElementById('label').innerHTML='Hello '+ username;
}