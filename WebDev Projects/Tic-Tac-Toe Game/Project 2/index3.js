


const buttons = document.querySelectorAll('.button'); 
turn=1 
gameOver =false
i=0
while(i<buttons.length){
    buttons[i].addEventListener('click',function(){
        //console.log(this.id +" clicked")
    //    ans = window.prompt("You want to place element here ? (y/n)");
    //    if (ans =="y"){
        if (turn%2 ==0){
            document.getElementById(this.id).innerHTML = "O";
        }
        else{
            document.getElementById(this.id).innerHTML = "X";
        }
    //    }
        turn++;
        box1 = document.getElementById('1').innerHTML
        box2 = document.getElementById('2').innerHTML
        box3 = document.getElementById('3').innerHTML
        box4 = document.getElementById('4').innerHTML
        box5 = document.getElementById('5').innerHTML
        box6 = document.getElementById('6').innerHTML
        box7 = document.getElementById('7').innerHTML
        box8 = document.getElementById('8').innerHTML
        box9 = document.getElementById('9').innerHTML
        
        turn%2==0 ? document.getElementById('turn').innerHTML ="O plays":document.getElementById('turn').innerHTML ="X plays";

        if(box1== box2 && box2==box3){
            window.alert(`${box1} wins!`)
            gameOver =true
        }
        else if(box1== box4 && box4==box7){
            window.alert(`${box1} wins!`)
            gameOver =true    
        }
        else if(box1== box5 && box5==box9){
            window.alert(`${box1} wins!`)
            gameOver =true    
        }    
        else if(box2== box5 && box5==box8){
            window.alert(`${box2} wins!`)
            gameOver =true    
        }
        else if(box3== box6 && box6==box9){
            window.alert(`${box3} wins!`)
            gameOver =true    
        }
        else if(box4== box5 && box5==box6){
            window.alert(`${box4} wins!`)
            gameOver =true    
        }
        else if(box7== box8 && box8==box9){
            window.alert(`${box1} wins!`)
            gameOver =true    
        }
        else if(box3== box5 && box5==box7){
            window.alert(`${box3} wins!`)
            gameOver =true    
        }

        if(gameOver ==true){
            document.getElementById('gameOver').innerHTML="GAME OVER!"
        }
    })
    i++
}
