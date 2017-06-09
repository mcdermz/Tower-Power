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
    vm.resCost = gameService.res.cost
    vm.comCost = gameService.com.cost
    vm.floorCost = 75
    vm.starType = {
      gold: '../assets/star_gold.png',
      black: '../assets/star-32-black.png'
    }

    vm.stars = gameService.tower.stars

    vm.$onInit = function () {
      vm.game.time = 0
      gameService.startTimer()
      console.log(vm.game.towerResources.population);
      vm.funds = gameService.tower.funds
      vm.game.towerResources =
        (vm.game.floors.length === 1 &&
          vm.game.floors[0].length < 1) ?
        { netRevenue: 0, population: 0 } : towerResources(vm.game.floors)
    }

    vm.newUnit = function (unit) {
      if (vm.game.floors[0].length < 6 && vm.game.funds >= gameService[unit].cost) {
        vm.game.floors[0].push(gameService[unit])
        vm.game.funds -= gameService[unit].cost
        vm.game.towerResources = towerResources(vm.game.floors)
        if (gameService.checkPopulation(vm.game.towerResources.population) && unit === 'res') {
          vm.stars.unshift('gold')
          vm.stars.pop()
        }
      }
    }

    vm.newFloor = function () {
      if (vm.game.floors.length < 8 && vm.game.floors[0].length >= 4 && vm.game.funds >= vm.floorCost) {
        vm.game.floors.unshift([])
        vm.game.funds -= vm.floorCost
      }
    }

    vm.hasStar = function (star) {
      return vm.starType[star]
    }
  }
})()
