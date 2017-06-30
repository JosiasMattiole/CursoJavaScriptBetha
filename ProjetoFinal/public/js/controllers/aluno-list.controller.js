(function () {
  'use strict';

  angular
    .module('app')
    .controller('AlunoListController', AlunoListController);

  AlunoListController.$inject = ['AlunoService']
  function AlunoListController(AlunoService) {
    var vm = this;
    vm.alunos = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    function activate() {
      var query = vm.busca ? { nome: vm.busca } : {}
      AlunoService.find(query)
        .success(function (data) {
          vm.alunos = data;
        });
    }

    function remover(aluno) {
      confirmBox('Deseja realmente remover o aluno "' + aluno.nome + '"', function () {
        AlunoService.remove(aluno._id)
          .success(function () {
            activate();
          });
      });
    }

  }
})();