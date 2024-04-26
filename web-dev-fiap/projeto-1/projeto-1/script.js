// Validação de login
function validar(){

    //declarando as variveis
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario === "Admin" && senha == "12345"){
        window.open("dashboard.html")
    }else{
        alert("usuario e senha invalido")
    }
}

//CRIADO UM SLDE SHOW AUTOMATICO

//DECLARADO AS VARIAVEIS

let imagens = ["./img/carro1.jpg", "./img/carro2.jpg", "./img/carro3.jpg"];
let index = 0;
let time = 3000;

function slideShow() {
  document.getElementById("banner__img").src = imagens[index];
  index++;

  if (index == imagens.length) {
    index = 0;
  }
  setTimeout("slideShow()", time);
}

slideShow()
