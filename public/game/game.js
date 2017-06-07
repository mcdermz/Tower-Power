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

    vm.population = gameService.tower.population
    vm.funds = gameService.tower.funds


    vm.$onInit = function () {
      vm.cashFlow = gameService.cashFlow()
    }

    vm.newUnit = function (unit) {
      if (floors[0].length < 4) {
        floors[0].push(gameService[unit])
        vm.funds -= 10
        vm.cashFlow = gameService.cashFlow()
      }
    }

    vm.newFloor = function () {
      if (floors.length < 8) {
        floors.unshift([])
        vm.funds -= 100
      }
    }


  }
})()
