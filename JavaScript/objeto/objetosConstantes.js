// pessoa -> 123 -> {...}
const Pessoa = {nome: 'Joao'};
Pessoa.nome = 'Pedro';
console.log(Pessoa);

// pessoa -> 456 -> {...}
// Pessoa = {nome: 'Ana'}; // Não é possível mudar o endereço para onde a constante aponta!!!

Object.freeze(Pessoa);

Pessoa.nome = 'Maria';
Pessoa.end = 'Rua ABC';
delete Pessoa.nome;

console.log(Pessoa.nome);
console.log(Pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao'});
console.log(pessoaConstante);