function respostaCerta () {
    var resposta = prompt("Qual das opções você vai escolher? A ou B?");
    if (resposta == "A" || resposta == "a"){
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Arqueiro/html/Arqueiropt2.html";
    } else {
        window.location.href = "http://127.0.0.1:5500/Jogo%20M%C3%B3dulo%201/Arqueiro/html/ArqueiroptErro.html";
    }
}