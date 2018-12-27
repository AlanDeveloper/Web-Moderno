const notas = [ 6.7, 9.8 , 7.7, 3.5, 8.5];

for (let i in notas ) {
    console.log(`Notas = ${notas[i]} \nÍndice = ${i}`);
}

const pessoa = {
    nome: 'Ana',
    idade: 17,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`Atributo = ${pessoa[atributo]} \nÍndice = ${atributo}`);
}