
function respostaCerta () {
    var resposta = prompt("Qual das opções você vai escolher? A, B, C ou D?");
    if (resposta == "C" || resposta == "c"){
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Mago/html/MagoptFinal.html";
    } else {
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Mago/html/MagoptErro.html";
    }
}