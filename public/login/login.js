(function() {
    'use strict';

    angular.module("app")
        .component('login', {
            controller: controller,
            templateUrl: '../login/login.html'

        })

    controller.$inject = ['loginService']
    function controller(loginService) {
      const vm = this
      vm.slideForm = function(){
         $('form').animate({
           height: "toggle",
           opacity: "toggle"
         }, "slow");
      }

      vm.isLoggingIn = loginService
    }
})();
