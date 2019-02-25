// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar';
delete produto.tag;
console.log(produto);


// Object.seal
const pessoa = { nome: 'Ana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Paula';
delete pessoa.nome;
pessoa.idade = 25;
console.log(pessoa);

// Object.freeze = selado + valores constantes