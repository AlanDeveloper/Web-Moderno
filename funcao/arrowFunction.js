let dobro = function (valor) {
    return valor * 2;
}

dobro = valor => { 
    return valor * 2
};

dobro = valor => valor * 2; // Return implicito

console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; // Possui um parametro
console.log(ola());