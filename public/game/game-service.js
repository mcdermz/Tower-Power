(function () {
  angular.module('app')
    .service('gameService', service)

    function service() {
      const vm = this
      vm.com = { name: 'com', netRevenue: 2}
      vm.res = { name: 'res', netRevenue: -1}


      vm.tower = {
        floors: [
          [vm.com, vm.res, vm.com, vm.res],
          [vm.res, vm.com, vm.res],
        ],
        population: 0,
        funds: 1000,
      }
    }
})()
