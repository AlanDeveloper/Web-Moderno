// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario  = { nome: 'Maria', salario: 3245.35 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread em array
const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoB = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoB);