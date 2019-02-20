// IIFE -> Immediately invoked Function Expression

(function() {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})();

(() => console.log('Será executado na hora!');)();

// Qualquer coisa criada dentro da função, só é acessível dentro da mesma
