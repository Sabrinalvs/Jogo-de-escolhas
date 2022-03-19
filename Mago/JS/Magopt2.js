function respostaCerta () {
    var resposta = prompt("Qual das opções você vai escolher? A, B ou C?");
    var tentativa = 2
    while (tentativa >= 1) {
        if (resposta == "C" || resposta == "c"){
            window.location.href = "http://127.0.0.1:5500/JogoModulo1/Mago/html/Magopt3.html";
            break;
        }  else if (resposta != "C" || resposta == "c"){
                if (tentativa == 2) {
                    alert("Você escolheu errado e tem mais uma tentativa, escolha com sabedoria!");
                    resposta = prompt("Qual das opções você vai escolher? A, B ou C?");
                    tentativa--;
                } else if (tentativa == 1) {
                    alert("Você perdeu");
                    window.location.href = "http://127.0.0.1:5500/JogoModulo1/Mago/html/MagoptErro.html";
                    break;
                }
            } 
        }
    }