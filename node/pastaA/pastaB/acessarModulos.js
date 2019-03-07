const moduloA = require('../../moduloA'); // Caso o nome do arquivo não respeite as letras maiúsculas e minúsculas não funcionará no linux!!!

// const moduloA = require('C:\Users\alany\Pictures\alan\Curso Web Moderno\node\moduloB.js');
console.log(moduloA.ola);

const saudacao = require('saudacao');
console.log(saudacao.ola);

const c = require('./pastaC');
console.log(c.ola2);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(8080);