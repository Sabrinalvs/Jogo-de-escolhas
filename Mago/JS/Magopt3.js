function respostaCerta () {
    var resposta = prompt("Qual das opções você vai escolher? A, B, C ou D?");
    var tentativa = 2
    while (tentativa >= 1) {
        if (resposta == "C" || resposta == "c"){
            window.location.href = "../html/MagoptFinal.html";
            break;
        }  else if (resposta != "C" || resposta == "c"){
                if (tentativa == 2) {
                    alert("Você escolheu errado e tem mais uma tentativa, escolha com sabedoria!");
                    resposta = prompt("Qual das opções você vai escolher? A, B, C ou D?");
                    tentativa--;
                } else if (tentativa == 1) {
                    alert("Você perdeu :(");
                    window.location.href = "../html/MagoptErro.html";
                    break;
                }
            } 
        }
    }