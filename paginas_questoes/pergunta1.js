const resp = document.getElementById("respCerta");
const btn = document.getElementById("btnConfirmar");


resp.addEventListener("click", function(){
    const cont = 1;
    const resposta = false;
    cont ++;
    if(cont % 2 == 0){
        resposta = false;
    } else{
        resposta = true;
    }
});

btn.addEventListener("click", function(){
    alert("ola");
});