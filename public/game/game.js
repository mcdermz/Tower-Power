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

    vm.isPlaying = true
    vm.population = gameService.tower.population
    vm.funds = gameService.tower.funds

    vm.cashFlow = function () {
      return floors
      .reduce((a,b) => a.concat(b))
      .reduce((a,b) => {
        return { netRevenue: a.netRevenue + b.netRevenue }
      }).netRevenue
    }

    vm.$onInit = function () {
    }

    vm.newUnit = function (unit) {
      if (floors[0].length < 4) {
        floors[0].push(gameService[unit])
        vm.funds -= 10
        console.log(vm.cashFlow());
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
