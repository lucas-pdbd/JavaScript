const Soma = (num1, num2) => num1 + num2;

const Subtracao = (num1, num2) => num1 - num2;

const Multiplicacao = (num1, num2) => num1 * num2;

const Divisao = (num1, num2) => num1 / num2;

const MostrarResultado = (num1, num2) => {
    console.log(`Soma: ${Soma(num1, num2)}`);
    console.log(`Subtração: ${Subtracao(num1, num2)}`);
    console.log(`Multiplicação: ${Multiplicacao(num1, num2)}`);
    console.log(`Divisão: ${Divisao(num1, num2)}`);
}

MostrarResultado(10, 5);