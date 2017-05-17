(function() {
'use strict';

  angular
    .module('app')
    .controller('AlunoController', AlunoController);

  function AlunoController() {
    var vm = this;
    vm.alunos = alunos(app);
    vm.remover = remover;

    vm.aluno = app.aluno;
    vm.salvar = salvar;

    //activate();
    //function activate() { }

    function salvar() {
      vm.alunos.push(vm.aluno);
      vm.aluno = {};
    }

    function remover(item) {
      if (!confirm('Deseja realmente excluir?'))
        return;
      var pos = vm.alunos.indexOf(item);
      vm.alunos.splice(pos, 1);
    }
  }
})();