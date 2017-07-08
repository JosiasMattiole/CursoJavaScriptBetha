(function () {
  'use strict';

  angular
    .module('app')
    .controller('TurmaFormController', TurmaFormController);

  TurmaFormController.$inject = ['TurmaService', '$location', '$routeParams'];

  function TurmaFormController(TurmaService, $location, $routeParams) {
    var vm = this;
    vm.turma = {};
    vm.titulo = 'Nova Turma';

    vm.salvar = salvar;

    activate();

    function activate() {
      if ($routeParams.id) {
        TurmaService.findById($routeParams.id)
          .success(function (data) {
            vm.turma = data;
            vm.titulo = 'Editando turma';
          });
      }
    }

    function salvar() {
      TurmaService.save(vm.turma)
        .success(function(){
          $location.path('/turmas');
        });
    }

    function remover() {
      TurmaService.remove(vm.turma.id)
        .success(function(){
          $location.path('/turmas');
        });
    }
  }
})();