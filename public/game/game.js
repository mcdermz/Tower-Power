(function () {
  angular.module('app')
    .component('towerpower', {
      controller: controller,
      templateUrl: './game/game.html'
    })

    function controller($scope) {
      const vm = this
      vm.floor = []
      vm.unit = []

      $scope.number = 6;
      $scope.getNumber = function(num) {
        return new Array(num);
      }
      // const floor = '
      //   <div class="container tower">\
      //     <div class="row floor">\
      //     </div>\
      //   </div>'

      vm.$onInit = function () {
        vm.unit.push('<div ng-repeat="i in getNumber(number)" class="unit col-xs-1"><small>unit</small></div>')
      }
    }

})()
