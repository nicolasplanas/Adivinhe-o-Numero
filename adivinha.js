const min = 0;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
let jogadas = 0;

alert("Bem vindo ao jogo do adivinhe o número!");

let entrada = prompt("Você deseja jogar?\n\n1) - Sim\n2) - Não\n\nDigite sua escolha a baixo...");

entrada = parseInt(entrada);

switch (entrada) {
    case 1:

        let numRandom = parseInt(prompt("Digite um número entre 0 e 100 para dar início!"));
        jogadas++;

        do {

            if (numRandom > 100) {

                numRandom = parseInt(prompt("Desculpe, mas só é possível números de 0 a 100, tente novamente!"));

            } else {

                if (numRandom < randomNum) {

                    numRandom = parseInt(prompt("O número digitado foi menor que o número proposto, tente novamente!"));

                } else if (numRandom > randomNum) {

                    numRandom = parseInt(prompt("O número digitado foi maior que o número proposto, tente novamente!"));

                }
                jogadas++;
            }

        } while (numRandom !== randomNum);

        alert("Parabéns, você adivinhou o número!\n\nVocê concluiu após " + jogadas + " jogadas.");
        console.log("O número que o computador escolheu foi " + randomNum);
        break;

    case 2:

        alert("O jogo será desligado, até breve!");
        break;

    default:

        alert("Opção não localizada, reinicie o programa!");
        break;
}