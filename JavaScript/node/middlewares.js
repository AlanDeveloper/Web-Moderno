// middleware pattern (chain of responsability)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid01';
    next();
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid02';
    next();
}

const passo3 = (contexto) => contexto.valor3 = 'mid03';

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1));
    }
    execPasso(0);
}

const contexto = {};
exec(contexto, passo1, passo2, passo3);
console.log(contexto);