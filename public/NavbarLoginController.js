(function () {
  angular.module('app')
    .controller('NavbarLoginController', NavbarLoginController)

    NavbarLoginController.$inject = ['loginService']
    function NavbarLoginController(loginService) {
      const vm = this

      vm.isLoggingIn = loginService.isLoggingIn
      console.log(vm.isLoggingIn);
    }
})()
