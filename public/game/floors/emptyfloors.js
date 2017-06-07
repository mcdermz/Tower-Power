(function () {
  'use strict'
  angular.module('app')
    .component('emptyfloor', {
      controller: controller,
      templateUrl: './game/floors/emptyfloors.html'
    })

    function controller () {
      const vm = this
      
      vm.$onInit = function () {
        vm.floors = [
          ['com', 'res', 'com'],
          ['res', 'com', 'res'],
          ['res', 'res', 'res', 'res'],
          ['com', 'com', 'com']
        ]
      }
    }
})()
