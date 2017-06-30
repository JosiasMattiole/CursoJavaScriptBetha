(function () {
  'use strict';

  angular
    .module('app')
    .controller('AlunoFormController', AlunoFormController);

  AlunoFormController.$inject = ['AlunoService', '$location', '$routeParams'];

  function AlunoFormController(AlunoService, $location, $routeParams) {
    var vm = this;
    vm.aluno = {};
    vm.titulo = 'Novo Aluno';

    vm.salvar = salvar;

    activate();

    function activate() {
      if ($routeParams.id) {
        AlunoService.findById($routeParams.id)
          .success(function (data) {
            vm.aluno = data;
            vm.titulo = 'Editando Aluno';
          });
      }
    }

    function salvar() {
      AlunoService.save(vm.aluno)
        .success(function(){
          $location.path('/alunos');
        });
    }

    function remover() {
      AlunoService.remove(vm.aluno.id)
        .success(function(){
          $location.path('/alunos');
        });
    }
  }
})();