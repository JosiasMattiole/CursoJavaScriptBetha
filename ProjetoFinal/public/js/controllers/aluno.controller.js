(function () {
  'use strict';

  angular
    .module('app')
    .controller('AlunoController', AlunoController);

  AlunoController.$inject = ['AlunoService', '$location', '$routeParams'];

  function AlunoController(AlunoService, $location, $routeParams) {
    var vm = this;
    vm.aluno = {};
    vm.titulo = 'Novo Aluno';

    vm.salvar = salvar;
    //vm.remover = remover;

    activate();

    function activate() {
      if ($routeParams.id) {
        AlunoService.findById($routeParams.id)
          .success(function (data) {
            vm.aluno = data;
            vm.titulo = 'Editando Pedido';
          });
      }
    }

    function salvar() {
      AlunoService.save(vm.aluno)
        .success(function(){
          $location.path('/alunos');
        });
    }

//    function remover(item) {
      //if (!confirm('Deseja realmente excluir?'))
//        return;
  //    var pos = vm.alunos.indexOf(item);
    //  vm.alunos.splice(pos, 1);
    //}
  }
})();