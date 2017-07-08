var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
    anoRef:{
        type: Intl,
        required: [true, 'Obrigatório informar o ano de referência da turma!']
    },
    descricao:{
        type: String,
        required: [true, 'Obrigatório informar a descrição da turma!']
    },
    aluno:[{
        type: Schema.Types.ObjectId,
        ref: 'alunos'
    }]
});

mongoose.model('turmas', modelo);