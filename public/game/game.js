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
    const floors = gameService.tower.floors

    vm.$onInit = function () {
      vm.funds = gameService.tower.funds
      vm.towerResources = (floors.length === 1 && floors[0].length < 1) ? { netRevenue: 0, population: 0 } : towerResources(floors)
    }

    vm.newUnit = function (unit) {
      if (floors[0].length < 4) {
        floors[0].push(gameService[unit])
        vm.funds -= gameService[unit].cost
        vm.towerResources = towerResources(floors)
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
