const respCerta = document.getElementById("respCerta");
const errada1 = document.getElementById("q1");
const errada2 = document.getElementById("q2");
const errada3 = document.getElementById("q3");
const boxResp = document.getElementById("box-resp");



respCerta.addEventListener("click", function(){
    boxResp.classList.add("box-resp");
    boxResp.style.backgroundColor = "#ff0000";
    setTimeout(() => {
        boxResp.classList.remove("box-resp");
        boxResp.classList.add("box-resp-sumir");
    }, 2500);
});

errada1.addEventListener("click", function(){
    boxResp.classList.add("box-resp");
    boxResp.style.backgroundColor = "#FFF";
});
errada2.addEventListener("click", function(){
    boxResp.classList.add("box-resp");
    boxResp.style.backgroundColor = "#FFF";
});
errada3.addEventListener("click", function(){
    boxResp.classList.add("box-resp");
    boxResp.style.backgroundColor = "#FFF";
});
