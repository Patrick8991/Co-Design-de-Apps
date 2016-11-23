function checkNome(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('nome');
    if (elUsername.value.length<4){
        elMsg.textContent = 'O nome deve ser maior!';
        }
    else{
        elMsg.textContent ='';
    }
}

function checkHora(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('nome');
    if (elUsername.value.length<4){
        elMsg.textContent = 'Horário não aceito!';
        }
    else{
        elMsg.textContent ='';
    }
}

function checkPlaca(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('nome');
    if (elUsername.value.length<4){
        elMsg.textContent = 'Placa não aceita!';
        }
    else{
        elMsg.textContent ='';
    }
}

function checkModelo(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('nome');
    if (elUsername.value.length<4){
        elMsg.textContent = 'Modelo não aceito!';
        }
    else{
        elMsg.textContent ='';
    }
}

function checkCor(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('nome');
    if (elUsername.value.length<3){
        elMsg.textContent = 'Cor não aceita!';
        }
    else{
        elMsg.textContent ='';
    }
}

function checkLocal(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('nome');
    if (elUsername.value.length<4){
        elMsg.textContent = 'Local não aceito!';
        }
    else{
        elMsg.textContent ='';
    }
}

function myFunction(x) {
    x.classList.toggle("change");
}