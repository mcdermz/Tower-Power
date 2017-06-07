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
      }

      vm.newCommercial = function () {
        console.log('add new com!');

      }

      vm.newResidential = function () {
        console.log('add new res!');
      }

    }

})()


// <div ng-repeat="i in getNumber(number)" class="slot col-xs-1"><small>slot</small></div>
