let dice1;
let dice2;
let dice3;
let jackpot;

document.getElementById('button').onclick=function(){
    dice1=Math.floor(Math.random()*6) +1;
    dice2=Math.floor(Math.random()*6) +1;
    dice3=Math.floor(Math.random()*6) +1;
    if (dice1==dice2 && dice2==dice3){
        document.getElementById('jackpot').innerHTML="YOU HIT A JACKPOT !!!";
    }
    document.getElementById('dice1').innerHTML="Dice 1: "+dice1;
    document.getElementById('dice2').innerHTML="Dice 2: "+dice2;
    document.getElementById('dice3').innerHTML="Dice 3: "+dice3;   
}

/* Random function in JavaScript

x=Math.floor(Math.random()); //(0,1) if rounded down is 0
y=Math.floor(Math.random()*6);//(0,1)*6 =(0,6) if rounded down [0,5]
z=Math.floor(Math.random()*6) +1;//(0,1)*6 +1 =(0,6)+1 =(1,7) if rounded down [1,6]

console.log(x);
console.log(y);
console.log(z);

*/
