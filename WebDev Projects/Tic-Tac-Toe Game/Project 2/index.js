// Creating a tic tac toe game using my Web Development SKills
/*
document.getElementsByClassName('button').onclick =function(){
    boxNo = onclick.target.id
    console.log(boxNo)
}
*/

const buttons = document.querySelectorAll('.button'); 

for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        console.log(this.id +" clicked")
    })
}
