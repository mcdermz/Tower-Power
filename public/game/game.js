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


    vm.$onInit = function () {
      vm.funds = gameService.tower.funds
      vm.towerResources = gameService.towerResources()
    }

    vm.newUnit = function (unit) {
      if (floors[0].length < 4) {
        floors[0].push(gameService[unit])
        vm.funds -= gameService[unit].cost
        vm.towerResources = gameService.towerResources()
      }
    }

    vm.newFloor = function () {
      if (floors.length < 8 && floors[0].length >= 3) {
        floors.unshift([])
        vm.funds -= 100
      }
    }
  }
})()
