(function() {
    'use strict';


  angular.module("app")
  .component('towerpower', {
    controller: controller,
    templateUrl: './towerpower.html'

        })
  controller.$inject = ['gameService', 'loginService']
  function controller (gameService, loginService, ngAnimate) {
    const vm = this
    vm.game = gameService
    vm.login = loginService

   }

})();
