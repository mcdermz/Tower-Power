(function () {
  angular.module('app')
    .service('gameService', service)

    service.$inject = ['$interval']
    function service($interval) {
      this.com = { name: 'com', cost: 10, netRevenue: 2, population: 0}
      this.res = { name: 'res', cost: 15, netRevenue: -1, population: 5}

      this.tower = {
        floors: [
          []
        ],
        funds: 1000,
      }

      this.startTimer = function (i = 1) {
        return $interval(() => { console.log(i++)}, 1000);
      }
    }
})()
