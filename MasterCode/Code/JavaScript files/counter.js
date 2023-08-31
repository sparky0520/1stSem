let count=0;

document.getElementById('buttonDec').onclick=function(){
    document.getElementById('count').innerHTML=count-1;
    count--;
}

document.getElementById('buttonReset').onclick=function(){
    document.getElementById('count').innerHTML=0;
    count =0;
}

document.getElementById('buttonInc').onclick=function(){
    document.getElementById('count').innerHTML=count+1;
    count++;
}

