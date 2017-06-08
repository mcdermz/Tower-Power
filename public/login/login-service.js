(function () {
  angular.module('app')
    .service('loginService', service)

    service.$inject = ['$http', '__env']

    function service($http, __env) {

      this.createUser = function (userData) {
        console.log(__env.apiUrl);
        return $http.post(__env.apiUrl + '/users', userData).then(response => {
          return response
        }).catch(err => {
          console.log(err)
        })
      }
    }

})()
