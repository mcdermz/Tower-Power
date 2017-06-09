(function() {
    'use strict';


  angular.module("app")
  .component('splash', {
    controller: controller,
    templateUrl: './splash/splash-template.html'

        })

  controller.$inject = ['gameService']
  function controller (gameService) {
    const vm = this
    vm.game = gameService
    vm.newGame = function(){
      gameService.isPlaying = !gameService.isPlaying
    }
   }

})();
