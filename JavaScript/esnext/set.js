// não aceita repetição/não indexado
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras');
times.add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Vasco');

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);