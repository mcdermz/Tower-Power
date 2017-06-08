(function () {
  angular.module('app')
    .service('gameService', service)

    service.$inject = ['$interval', '$window']
    function service($interval, $window) {
      this.com = { name: 'com', cost: 100, netRevenue: 2, population: 0}
      this.res = { name: 'res', cost: 150, netRevenue: -1, population: 5}

      this.tower = {
        floors: [
          []
        ],
        funds: 1000,
        towerResources: {
          netRevenue: 0,
          population: 0,
        }
      }

      this.startTimer = function (i = 1) {
        return $interval(() => {
          this.tower.funds += this.tower.towerResources.netRevenue
          if (this.tower.funds < 0) {
            window.alert('You Lose!')
            this.tower.funds = 1000
            this.isPlaying = false
          }
        }, 1000);
      }
    }
})()
