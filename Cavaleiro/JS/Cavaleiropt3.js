function respostaCerta () {
    var resposta = prompt("Qual das opções você vai escolher? A, B, C ou D?");
    if (resposta == "d" || resposta == "D"){
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Cavaleiro/HTML/CavaleiroptFinal.html";
    } else {
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Cavaleiro/HTML/CavaleiroptErro.html";
    }
}