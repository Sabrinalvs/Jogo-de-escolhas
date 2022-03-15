function respostaCerta () {
    var resposta = prompt("Qual das opções você vai escolher? A, B ou C?");
    if (resposta == "A" || resposta == "a"){
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Arqueiro/html/Arqueiropt3.html";
    } else {
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Arqueiro/html/ArqueiroptErro.html";
    }
}