(function () {
  'use strict';

  angular
    .module('app')
    .factory('AlunoService', AlunoService);

  AlunoService.$inject = ['$http'];
  function AlunoService($http) {
    var service = {
      find: find,
      findById: findById,
      save: save,
      remove: remove
    };

    var URL = '/api/alunos';

    return service;

    ////////////////
    function find(query) {
      return $http.get(URL, { params: { filter: JSON.stringify(query) } });
    }

    function findById(idade) {
      return $http.get(URL + '/' + idade);
    }

    function save(record) {
      if (record.id) {
        return $http.put(URL + '/' + record.id, record);
      } else {
        return $http.post(URL, record);
      }
    }

    function remove(idade) {
      return $http.delete(URL + '/' + idade);
    }
  }
})();