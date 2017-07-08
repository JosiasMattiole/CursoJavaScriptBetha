var mongoose = require('mongoose');
var turmasModel = mongoose.model('turmas');

module.exports = function(app){
    app.get('/api/turmas', function(req, resp){
        turmasModel.find(req.query.filter, [], {sort: {anoRef: 1}})
            .populate('alunos', 'nome idade')
            .then(function(dados){
                resp.json(dados);
            }, function(erro){
                resp.status(500).json(erro);
            });
    });

    app.get('/api/turmas/:id', function(req, resp){
        turmasModel.findById(req.params.id)
            .then(function(data){
                resp.json(data);
            }, function(erro){
                resp.status(500).json(erro);
            });
    });

    app.post('/api/turmas', function(req, resp){
        turmasModel.create(req.body)
            .then(function(dado){
                console.log('Turma inserida com sucesso!')
                resp.json(dado);
            }, function(erro){
                console.log('Erro:', erro)
                resp.status(500).json(erro);
            });
    });

    app.put('/api/turmas/:id', function (req, resp) {
        turmasModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(function (dado) {
                resp.json(dado)
            }, function (erro) {
                resp.status(500).json(erro);
            });
    });

    app.delete('/api/turmas/:id', function (req, resp) {
        turmasModel.remove({ _id: req.params.id })
            .then(function () {
                resp.sendStatus(204);
            }, function (erro) {
                resp.status(500).json(erro);
            });
    });
}