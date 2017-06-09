(function () {
  angular.module('app')
    .service('gameService', service)

    service.$inject = ['$interval', '$window']
    function service($interval, $window) {
      this.com = { name: 'com', cost: 150, netRevenue: 5, population: 0}
      this.res = { name: 'res', cost: 100, netRevenue: -10, population: 5}
      this.time = 0

      this.tower = {
        floors: [
          []
        ],
        funds: 1000,
        towerResources: {
          netRevenue: 0,
          population: 0,
        },
        starRating: 0,
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
          starRating: 0,
          stars: new Array(5).fill('black'),
        }
        window.alert(`You ${outcome}!!!! Your SCORE is: ${this.time}`)
        this.isPlaying = false
      }

      this.checkPopulation = function (pop) {
        return ([35, 25, 15, 10, 5].indexOf(pop) !== -1)
      }

      this.startTimer = function () {
        return $interval(() => {
          this.time += 1

          if (this.tower.funds < 0) {
            this.gameOver('lose')
          }
          if (this.tower.stars.slice(-1)[0] === 'gold'){
            this.gameOver('WIN')
          }
          this.tower.funds += this.tower.towerResources.netRevenue
        }, 1000);
      }
    }
})()
