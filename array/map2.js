const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar array apenas com os preços

const transformaJSON = e => `R$ ${ JSON.parse(e).preco }`.replace('.', ',');

const obj = carrinho.map(transformaJSON);
console.log(obj);