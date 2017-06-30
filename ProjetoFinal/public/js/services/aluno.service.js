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

    function findById(id) {
      return $http.get(URL + '/' + id);
    }

    function save(record) {
      if (record._id) {
        console.log("Entrou no PUT!!")
        return $http.put(URL + '/' + record._id, record);
      } else {
        console.log("Entrou no POST!!")
        return $http.post(URL, record);
      }
    }

    function remove(id) {
      return $http.delete(URL + '/' + id);
    }
  }
})();