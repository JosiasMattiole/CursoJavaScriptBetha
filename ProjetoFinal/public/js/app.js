(function () {
  'use strict';

  angular.module('app', ['ngRoute', 'ui.bootstrap']).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/alunos', {
        templateUrl: 'partials/aluno-list.html',
        controller: 'AlunoListController',
        controllerAs: 'vm'
      })
      .when('/alunos/new', {
        templateUrl: 'partials/aluno-form.html',
        controller: 'AlunoFormController',
        controllerAs: 'vm'
      })
      .when('/alunos/:id', {
        templateUrl: 'partials/aluno-form.html',
        controller: 'AlunoFormController',
        controllerAs: 'vm'
      })
      .when('/turmas', {
        templateUrl: 'partials/turma-list.html',
        controller: 'TurmaListController',
        controllerAs: 'vm'
      })
      .when('/turmas/new', {
        templateUrl: 'partials/turma-form.html',
        controller: 'TurmaFormController',
        controllerAs: 'vm'
      })
      .when('/turmas/:id', {
        templateUrl: 'partials/turma-form.html',
        controller: 'TurmaFormController',
        controllerAs: 'vm'
      })
      .when('/sobre', {
        templateUrl: 'partials/sobre.html'
      })
      .otherwise('/');
  }
})();