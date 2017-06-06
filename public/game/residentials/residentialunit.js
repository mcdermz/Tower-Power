(function () {
  angular.module('app')
    .component('residentialunit', {
      controller: controller,
      templateUrl: './game/residentials/residentialunit.html'
    })

    function controller () {
      const vm = this
      vm.name = "residentialunit"

    }
})()
