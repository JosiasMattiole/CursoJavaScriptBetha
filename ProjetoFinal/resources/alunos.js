var mongoose = require('mongoose');
var alunosModel = mongoose.model('alunos');

module.exports = function(app){
    app.get('/api/alunos', function(req, resp){
        alunosModel.find()
            .then(function(dados){
                resp.json(dados);
            }, function(erro){
                resp.status(500).json(erro);
            });
    })

    app.post('/api/alunos', function(req, resp){
        alunosModel.create(req.body)
            .then(function(dado){
                console.log('Aluno inserido com sucesso!')
                resp.json(dado);
            }, function(erro){
                resp.status(500).json(erro);
            });
    })

    app.get('/api/alunos/:idade', function(req, resp){
        alunosModel.findById(req.params.idade)
            .then(function(data){
                resp.json(data);
            }, function(erro){
                resp.status(500).json(erro);
            });
    })
}