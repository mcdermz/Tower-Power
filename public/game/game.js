(function () {
  angular.module('app')
    .component('game', {
      controller: controller,
      templateUrl: './game/game.html'
    })

    controller.$inject = ['gameService']
    function controller(gameService) {
      const vm = this

      vm.newTower = function(num) {
        return new Array(num);
      }

      vm.$onInit = function () {
      }

      vm.newUnit = function (unit) {
        gameService.tower.floors[0].push(gameService[unit])
      }

    }

})()


// <div ng-repeat="i in getNumber(number)" class="slot col-xs-1"><small>slot</small></div>
