// Exercicio 1
console.log('Bem vindo!');

// Exercicio 2
let nome = 'Jhonata';
console.log(`Olá, ${nome}!`);
// Exercicio 3
alert(`Olá, ${nome}!`);

// Exercicio 4
linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

// Exercicio 5
let valor1 = 27;
let valor2 = 11;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
// Exercicio 6
let resultadoDaSubtracao = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoDaSubtracao}.`);

// Exercicio 7
idade = prompt('Digite sua idade:');
if (idade >= 18) {
	console.log('Você é maior de idade.')
} else {
	console.log('Você é menor de idade.')
}

// Exercicio 8
numero = prompt('Digite um número:');
if (numero > 0) {
	console.log('Esse número é positivo.');
} else if (numero == 0) {
	console.log('Número 0.');
} else {
	console.log('Esse número é negativo.');
}

// Exercicio 9
let number = 1;
while (number < 11) {
	console.log(number);
	number++;
}

// Exercicio 10
let nota = 6;
if (nota >= 7) {
	console.log('Aprovado.');
} else {
	console.log('Reprovado.');
}

// Exercicio 11
let math1 = Math.random();
console.log(math1);

// Exercicio 12
let math2 = parseInt(Math.random() * 10 + 1);
console.log(math2);

// Exercicio 13
let math3 = parseInt(Math.random() * 1000 + 1);
console.log(math3);