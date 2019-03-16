const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, res) => {
    console.log(req.body);
    res.send('<h2>Parabéns. Usuário Incluído!</h2>');
});

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('<h2>Parabéns. Usuário Alterado!</h2>');
});

app.listen(8080, () => {
    console.log('Servidor executando na porta: 8080.');
});