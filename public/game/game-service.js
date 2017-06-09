(function () {
  angular.module('app')
    .service('gameService', service)

    service.$inject = ['$interval', '$window']
    function service($interval, $window) {
      this.com = { name: 'com', cost: 150, netRevenue: 6, population: 0}
      this.res = { name: 'res', cost: 100, netRevenue: -9, population: 5}
      this.starLevels = [5, 10, 15, 25, 35]

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
        time: 0,
        stars: new Array(5).fill('black')
      }

      this.gameOver = function (outcome, time) {
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
        window.alert(`You ${outcome}!!!! Your SCORE is: ${time}`)
        this.isPlaying = false
      }

      this.checkPopulation = function (pop) {
        return (this.starLevels.indexOf(pop) !== -1)
      }

      let promise

      this.startTimer = function () {
        this.stopTimer()
        promise = $interval(() => {
          this.tower.time += 1

          if (this.tower.funds < 0) {
            this.gameOver('lose', this.tower.time)
          }
          if (this.tower.towerResources.netRevenue === 0 && this.tower.funds < 100) {
            this.gameOver('are stuck! You have zero income and do not have enough money to build any more units. Try again!', 'No score for you!')
          }
          if (this.tower.stars.slice(-1)[0] === 'gold'){
            this.gameOver('WIN', this.tower.time)
          }
          this.tower.funds += this.tower.towerResources.netRevenue
        }, 1000);
      }

      this.stopTimer = function () {
        $interval.cancel(promise)
      }
    }
})()
