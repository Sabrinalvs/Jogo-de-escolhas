function respostaCerta () {
    var resposta = prompt("Qual das opções você vai escolher? A ou B?");
    var tentativa = 2
    while (tentativa >= 1) {
        if (resposta == "b" || resposta == "B"){
            window.location.href = "../html/Cavaleiropt2.html";
            break;
        }  else if (resposta != "b" || resposta == "B"){
                if (tentativa == 2) {
                    alert("Você escolheu errado e tem mais uma tentativa, escolha com sabedoria!");
                    resposta = prompt("Qual das opções você vai escolher? A ou B?");
                    tentativa--;
                } else if (tentativa == 1) {
                    alert("Você perdeu :(");
                    window.location.href = "../html/CavaleiroptErro.html";
                    break;
                }
        } 
    }
}