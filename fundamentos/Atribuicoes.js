const a = { name: 'Teste'};
console.log(a);

const b = a;
b.name = 'Opa';

console.log(a);
// Atribuição por referência
// A const "a" e "b" armazena o endereço do obj, por isso o obj pode ser manipulado a partir de uma das consts

let c = 3;

let d = c;
d++;
console.log(d);
console.log(c);
// Atribuição por valor
// Faz uma cópia do valor, onde ambos são independentes