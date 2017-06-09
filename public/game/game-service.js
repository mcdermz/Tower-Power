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
        },
        starRating: 1,
        stars: new Array(5).fill('black')
      }

      this.gameOver = function (outcome) {
        this.tower = {
          floors: [
            []
          ],
          funds: 1000,
          towerResources: {
            netRevenue: 0,
            population: 0,
          },
          starRating: 1,
          stars: new Array(5).fill('black'),
        }
        this.isPlaying = false
        window.alert(`You ${outcome}!!!!`)
      }

      this.checkPopulation = function (pop) {
        switch (pop) {
          case 30:
            this.gameOver('win')
            return true
          case 20:
            return true
          case 15:
            return true
          case 10:
            return true
          default:
            return false
        }
      }

      this.startTimer = function (i = 1) {
        return $interval(() => {
          this.tower.funds += this.tower.towerResources.netRevenue
          if (this.tower.funds < 0) {
            this.gameOver('lose')
          }
        }, 1000);
      }
    }
})()
