(function () {
  angular.module('app')
    .component('game', {
      controller: controller,
      templateUrl: './game/game.html'
    })

    controller.$inject = ['gameService']
    function controller(gameService) {
      const vm = this
      const floors = gameService.tower.floors

      vm.newTower = function(num) {
        return new Array(num);
      }

      vm.$onInit = function () {
      }

      vm.newUnit = function (unit) {
        if (floors[0].length < 4) floors[0].push(gameService[unit])
      }

      vm.newFloor = function () {
        if (floors.length < 8) floors.unshift([])
      }
    }

})()


// <div ng-repeat="i in getNumber(number)" class="slot col-xs-1"><small>slot</small></div>
