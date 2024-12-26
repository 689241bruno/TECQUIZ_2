var botao = document.getElementById('botao');
var tela = document.getElementById('tela');
var nuvens = document.getElementsByClassName('nuvem');
botao.addEventListener('click', function() {
   
    tela.classList.add('sumir');
    setTimeout(function(){
        tela.style.display = 'none';
    }, 700);
    setTimeout(function() {
        window.location.href ="./pergunta1.html";
    }, 2000);
    const parede = document.getElementById('transicao');
    parede.classList.add('parede');
});