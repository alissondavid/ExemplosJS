const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Leonardo";

// concatenação (+)

console.log(citacao + meuNome)

//Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Converter para minusculo para validar

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true