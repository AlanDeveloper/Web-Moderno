const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chines = pessoa => pessoa.pais === 'China';
const mulheres = pessoa => pessoa.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);

    // Mulher chinesa de menor salário
    const resultado = funcionarios.filter(chines).filter(mulheres).reduce(menorSalario);
    console.log(resultado);
});
