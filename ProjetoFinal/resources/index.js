var alunos = require('./alunos')
var turmas = require('./turmas')

module.exports = function(app) {
  alunos(app);
  turmas(app);
}