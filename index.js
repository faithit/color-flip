const btn=document.querySelector("button")
//btn.style.backgroundColor="red";
function random(number){
    return Math.floor(Math.random()*(number+1));
}

function changebackground(){
 const rdcol =`rgb(${random(255)}, ${random(255)}, ${random(255)})`;
 document.body.style.backgroundColor=rdcol
}
btn.addEventListener('click' ,changebackground)