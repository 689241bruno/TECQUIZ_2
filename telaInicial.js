var botao = document.getElementById('botao');
var tela = document.getElementById('tela');
var nuvens = document.getElementsByClassName('nuvem');
botao.addEventListener('click', function() {
   
    tela.classList.add('sumir');
    setTimeout(function(){
        tela.style.display = 'none';
    }, 700);
    setTimeout(function() {
        window.location.href ="http://localhost/tecquiz_paginas_questoes/pergunta1.php";
    }, 2000);
    const parede = document.getElementById('transicao');
    parede.classList.add('parede');
});