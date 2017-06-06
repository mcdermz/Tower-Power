(function () {
  angular.module('app')
    .component('commercialunit', {
      controller: controller,
      templateUrl: './game/commercials/commercialunit.html'
    })

    function controller () {
      // delete
      // move
      const vm = this
      vm.name = "commercialunit"

    }
})()
