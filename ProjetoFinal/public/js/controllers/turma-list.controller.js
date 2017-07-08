(function () {
  'use strict';

  angular
    .module('app')
    .controller('TurmaListController', TurmaListController);

  TurmaListController.$inject = ['TurmaService']
  function TurmaListController(TurmaService) {
    var vm = this;
    vm.turmas = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    function activate() {
      var query = vm.busca ? { descricao: vm.busca } : {}
      TurmaService.find(query)
        .success(function (data) {
          vm.turmas = data;
        });
    }

    function remover(turma) {
      confirmBox('Deseja realmente remover a turma "' + turma.descricao + '"', function () {
        TurmaService.remove(turma._id)
          .success(function () {
            activate();
          });
      });
    }

  }
})();