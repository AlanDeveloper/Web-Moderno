
// Scopo = Visibilidade
// {} = bloco de comando

{{{ var sera = 'Será???'; }}}
console.log(sera);
function teste () {
    var local = 123;
    console.log(local);
}

teste();
// console.log(local); // Erro!!!

// Var pode ser acessada por qualquer local do sistema, tendo apenas dois scopos(global e na funcao), por isso é recomendado não utiliza-la