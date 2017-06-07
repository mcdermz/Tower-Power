(function () {
  'use strict'
  angular.module('app')
    .component('emptyfloor', {
      controller: controller,
      templateUrl: './game/floors/emptyfloors.html'
    })
    controller.$inject = ['gameService']
    function controller (gameService) {
      const vm = this

      vm.$onInit = function () {
        vm.floors = gameService.tower.floors
      }
    }
})()
