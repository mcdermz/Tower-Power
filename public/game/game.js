(function () {
  angular.module('app')
    .component('game', {
      controller: controller,
      templateUrl: './game/game.html'
    })

  function towerResources(resource) {
    return resource
    .reduce((a,b) => a.concat(b))
    .reduce((a,b) => {
      return {
        netRevenue: a.netRevenue + b.netRevenue,
        population: a.population + b.population
      }
    })
  }

  controller.$inject = ['gameService']
  function controller(gameService) {
    const vm = this
    vm.game = gameService.tower

    vm.$onInit = function () {
      gameService.startTimer()
      vm.funds = gameService.tower.funds
      vm.game.towerResources = (vm.game.floors.length === 1 && vm.game.floors[0].length < 1) ? { netRevenue: 0, population: 0 } : towerResources(vm.game.floors)

    }

    vm.newUnit = function (unit) {
      if (vm.game.floors[0].length < 6) {
        vm.game.floors[0].push(gameService[unit])
        vm.game.funds -= gameService[unit].cost
        vm.game.towerResources = towerResources(vm.game.floors)
      }
    }

    vm.newFloor = function () {
      if (vm.game.floors.length < 8 && vm.game.floors[0].length >= 4) {
        vm.game.floors.unshift([])
        vm.game.funds -= 100
      }
    }
  }
})()
