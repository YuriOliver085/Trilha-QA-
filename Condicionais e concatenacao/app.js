// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let = prompt("Qual dia da semana?");
if (dia == "Sábado" || dia == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt("Digite um número:");
if (numero > 0) {
  alert("O número é Positivo");
} else if (numero < 0) {
  alert("O número é Negativo");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
if (pontos >= 100) {
   alert("Parabéns, você venceu!");
} else {
   alert("Tente novamente para ganhar.");
  }

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
var saldo = 2000;
  alert(`Seu saldo é de R$ ${saldo}`)

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nome = prompt("Insira seu nome:");
alert(`Bem-vindo, ${nome}`);
  