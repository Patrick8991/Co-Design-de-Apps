function checkUser(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('usuario');
    if (elUsername.value.length<4){
       alert("O nome deve ser maior!"); 
        }
    else{
        elMsg.textContent ='';
    }
}


function store(){
     var inputUsuario= document.getElementById("usuario");
     localStorage.setItem("usuario", inputUsuario.value);

     var inputEstabelecimento= document.getElementById("estabelecimento");
     localStorage.setItem("estabelecimento", inputEstabelecimento.value);

     var inputEmpresa= document.getElementById("empresa");
     localStorage.setItem("empresa", inputEmpresa.value);


    }
