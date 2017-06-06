(function() {
    'use strict';

    angular.module("app", [])
        .component('login', {
            controller: controller,
            templateUrl: '../login/login.html'

        })


    function controller() {
        const vm = this
        vm.slideForm = function(){
           $('form').animate({
             height: "toggle",
             opacity: "toggle"
           }, "slow");
        }
    }
})();

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
