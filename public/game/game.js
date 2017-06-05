(function () {
  angular.module('app')
    .component('towerpower', {
      controller: controller,
      templateUrl: './game/game.html'
    })

    function controller() {
      const vm = this

      // vm.emptyFloor = '<div class="floor row"><div class="col-md-12">HEY</div></div>'

      vm.newTower = function(num) {
        return new Array(num);
      }

      vm.$onInit = function () {
        vm.floors = new Array(6)
      }
    }

})()


// <div ng-repeat="i in getNumber(number)" class="slot col-xs-1"><small>slot</small></div>
