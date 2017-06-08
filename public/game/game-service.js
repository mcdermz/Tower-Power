(function () {
  angular.module('app')
    .service('gameService', service)

    service.$inject = ['$interval', '$window']
    function service($interval, $window) {
      this.com = { name: 'com', cost: 150, netRevenue: 5, population: 0}
      this.res = { name: 'res', cost: 100, netRevenue: -10, population: 5}

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
            this.isPlaying = false
            window.alert('You Lose!')
          }
        }, 1000);
      }
    }
})()
