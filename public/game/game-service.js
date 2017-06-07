(function () {
  angular.module('app')
    .service('gameService', service)

    function service() {
      const vm = this
      const com = { name: 'com'}
      const res = { name: 'res'}

      vm.tower = {
        floors: [
          [com, res, com],
          [res, com, res],
          [res, res, res, res],
          [com, com, com]
        ]
      }

    }

})()
