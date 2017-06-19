(function () {
  'use strict';

  angular.module('app', ['ngRoute', 'ui.bootstrap']).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];

  function AppConfig($routeProvider) {
    $routeProvider
      //Para a rota '/', carregar main.html
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      //Para a rota '/alunos/new' carregar alunos-form.html e o controller aluno.controller.js
      .when('/alunos/new', {
        templateUrl: 'partials/alunos-form.html',
        controller: 'AlunoController',
        controllerAs: 'vm'
      })
      .when('/alunos/:idade', {
        templateUrl: 'partials/alunos-form.html',
        controller: 'AlunoController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();