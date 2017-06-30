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
      .when('/sobre', {
        templateUrl: 'partials/sobre.html'
      })
      .otherwise('/');
  }
})();