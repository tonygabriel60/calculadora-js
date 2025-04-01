let opcao = 0;
console.log("Calculadora");
do {
  console.log(
    "[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] sair"
  );
  opcao = prompt("Escolha a opção desejada: ");

  switch (opcao) {
    case "1":
      soma();
      break;
    case "2":
      subtracao();
      break;
    case "3":
      multiplicacao();
      break;
    case "4":
      divisao();
      break;
  }
} while (opcao != 5);

function soma() {
  let num1 = parseInt(prompt("Digite o primeiro numero da soma(+): "));
  let num2 = parseInt(prompt("Digite o segundo numero da soma(+): "));

  console.log(num1 + "+" + num2 + "=" + (num1 + num2));
}

function subtracao() {
  let num1 = parseInt(prompt("Digite o primeiro numero da Subtração(-): "));
  let num2 = parseInt(prompt("Digite o segundo numero da Subtração(-): "));

  console.log(num1 + "-" + num2 + "=" + (num1 - num2));
}

function multiplicacao() {
  let num1 = parseInt(prompt("Digite o primeiro numero da Multiplicação(x): "));
  let num2 = parseInt(prompt("Digite o segundo numero da Multiplicação(x ): "));

  console.log(num1 + "x" + num2 + "=" + num1 * num2);
}

function divisao() {
  let num1 = parseInt(prompt("Digite o primeiro numero da Divisão(/): "));
  let num2 = 0;
  do {
    num2 = parseInt(prompt("Digite o segundo numero da Divisão(/): "));
    if (num2 == 0) {
      console.log(
        "Impossivel realizar a divisão por zero, escolha outro numero! "
      );
    }
  } while (num2 == 0);

  console.log(num1 + "/" + num2 + "=" + num1 / num2);
}
