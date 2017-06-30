var mongoose = require('mongoose');
var alunosModel = mongoose.model('alunos');

module.exports = function (app) {
    app.get('/api/alunos', function (req, resp) {
        alunosModel.find()
            .then(function (dados) {
                resp.json(dados);
            }, function (erro) {
                resp.status(500).json(erro);
            });
    });

    app.get('/api/alunos/:id', function (req, resp) {
        alunosModel.findById(req.params.id)
            .then(function (dados) {
                resp.json(dados);
            }, function (erro) {
                resp.status(500).json(erro);
            });
    });

    app.post('/api/alunos', function (req, resp) {
        alunosModel.create(req.body)
            .then(function (dado) {
                console.log('Aluno inserido com sucesso!')
                resp.json(dado);
            }, function (erro) {
                console.log('Erro:', erro)
                resp.status(500).json(erro);
            });
    });

    app.put('/api/alunos/:id', function (req, resp) {
        alunosModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(function (dado) {
                resp.json(dado)
            }, function (erro) {
                resp.status(500).json(erro);
            });
    });

    app.delete('/api/alunos/:id', function (req, resp) {
        alunosModel.remove({ _id: req.params.id })
            .then(function () {
                resp.sendStatus(204);
            }, function (erro) {
                resp.status(500).json(erro);
            });
    });
}