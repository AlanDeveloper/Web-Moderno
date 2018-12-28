console.log(soma(3, 4));
// console.log(sub(3, 4)); // Erro!!!
// console.log(mult(3, 4)); // Erro!!!

// function declaration
function soma(x, y) {
    return x + y;
}

// funcion expression
const sub = function (x, y) {
    return x - y;
}

// named function expression
const mult = function mult(x, y) {
    return x * y;
}