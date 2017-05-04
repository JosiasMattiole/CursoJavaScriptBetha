var mongoose = require('mongoose');
var turmasModel = mongoose.model('turmas');

module.exports = function(app){
    app.get('/api/turmas', function(req, resp){
        turmasModel.find()
            .then(function(dados){
                resp.json(dados);
            }, function(erro){
                resp.status(500).json(erro);
            });
    })

    app.post('/api/turmas', function(req, resp){
        turmasModel.create(req.body)
            .then(function(dado){
                console.log('Turma inserida com sucesso!')
                resp.json(dado);
            }, function(erro){
                resp.status(500).json(erro);
            });
    })

    app.get('/api/turmas/:anoRef', function(req, resp){
        turmasModel.findById(req.params.anoRef)
            .then(function(data){
                resp.json(data);
            }, function(erro){
                resp.status(500).json(erro);
            });
    })
}