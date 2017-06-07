(function () {
  angular.module('app')
    .service('gameService', service)

    function service() {
      const vm = this
      vm.com = { name: 'com'}
      vm.res = { name: 'res'}

      vm.tower = {
        floors: [
          [vm.com, vm.res, vm.com, vm.res],
          [vm.res, vm.com, vm.res],
        ]
      }

    }

})()
