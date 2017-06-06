(function () {
  angular.module('app')
    .component('game', {
      controller: controller,
      templateUrl: './game/game.html'
    })

    function controller() {
      const vm = this

      vm.newTower = function(num) {
        return new Array(num);
      }

      vm.$onInit = function () {
        vm.floors = new Array(6)
      }

      vm.newCommercial = function () {

      }

      vm.newResidential = function () {

      }

    }

})()


// <div ng-repeat="i in getNumber(number)" class="slot col-xs-1"><small>slot</small></div>
