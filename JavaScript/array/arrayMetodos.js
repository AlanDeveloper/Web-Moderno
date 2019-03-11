const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Massa quebrou o carro
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // Vettel quebrou o carro
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Excluir
pilotos.splice(3, 1) // Massa quebrou o carro de novo
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // Novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4) // Novo array
console.log(algunsPilotos2);