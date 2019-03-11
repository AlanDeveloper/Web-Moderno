const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Ventilador', preco: 2090, fragil: false },
    { nome: 'Copo de vidro', preco: 12, fragil: true },
    { nome: 'Copo de plástico', preco: 18, fragil: false }
];
console.log(produtos.filter(p => {
    return false;
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));