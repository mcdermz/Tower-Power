(function() {
    'use strict';

    angular.module("app")
        .component('login', {
            controller: controller,
            templateUrl: '../login/login.html'

        })

    controller.$inject = ['loginService', '$http']
    function controller(loginService, $http) {
      const vm = this
      vm.slideForm = function(){
         $('form').animate({
           height: "toggle",
           opacity: "toggle"
         }, "slow");
      }

      vm.loginService = loginService

      vm.createUser = function createUser(userData){
        const createUserUrl = 'http://localhost:4567/users'
        return $http.post(createUserUrl, userData).then(response => {
          delete vm.user
          return response
        }).catch(err => {
          console.log(err)
        })

      }
    }
})();
