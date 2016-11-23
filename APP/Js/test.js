function checkUser(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('nome');
    if (elUsername.value.length<4){
       alert("O nome deve ser maior!"); 
        }
    else{
        elMsg.textContent ='';
    }
}

function myFunction(x) {
    x.classList.toggle("change");
}