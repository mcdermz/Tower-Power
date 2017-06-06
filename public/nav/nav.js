(function () {
  angular.module('app')
    .component('navbar', {
      controller: controller,
      templateUrl: './nav/nav.html'
    })

    controller.$inject = ['loginService']
    function controller (loginService) {
      const vm = this

      vm.showLoginForm = function () {
        loginService.showForm = !loginService.showForm
      }

    }
})()
