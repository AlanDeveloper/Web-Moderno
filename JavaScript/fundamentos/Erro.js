function tratarErroELancar(erro) {
    // throw new Error('...');
    throw 'Falha em gritar';
}

function ImprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        tratarErroELancar(e);
    } finally {
        console.log('Eu executo dando erro ou não');
    }
}

const obj = { nome: 'Roberto'};
ImprimirNomeGritado(obj);