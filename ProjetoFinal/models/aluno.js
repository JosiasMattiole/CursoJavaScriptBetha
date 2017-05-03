var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
    nome:{
        type: String,
        required: [true, 'Obrigatório informar o nome!']
    },
    idade:{
        type: Intl,
        required: [true, 'Obrigatório informar a idade!']
    }
});

mongoose.model('alunos', modelo);