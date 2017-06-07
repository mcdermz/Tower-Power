(function () {
  angular.module('app')
    .component('emptyfloor', {
      controller: controller,
      templateUrl: './game/floors/emptyfloors.html'
    })

    function controller () {
      const vm = this
      vm.$onInit = function () {
        vm.floors = new Array(6)
      }
    }
})()
