
const buttons = document.querySelectorAll('.button'); 

for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        //console.log(this.id +" clicked")
        ans = window.prompt("You want to place X here ? (y/n)");
        if (ans.toLowerCase() =="yes"){
            document.getElementById(this.id).innerHTML = "X"; 
        }
    })
}
