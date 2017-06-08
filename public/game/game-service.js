(function () {
  angular.module('app')
    .service('gameService', service)

    function service() {
      this.com = { name: 'com', cost: 10, netRevenue: 2, population: 0}
      this.res = { name: 'res', cost: 15, netRevenue: -1, population: 5}

      this.tower = {
        floors: [
          []
        ],
        funds: 1000,
      }

      this.startTimer = function (i = 1) {
          i++;
          setTimeout(startTimer, 1000); // callback

          if (i % 1 === 0)  {
            console.log(i);
          }
      }
    }
})()
