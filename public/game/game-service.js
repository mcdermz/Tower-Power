(function () {
  angular.module('app')
    .service('gameService', service)

    function service() {
      this.com = { name: 'com', netRevenue: 2, population: 0}
      this.res = { name: 'res', netRevenue: -1, population: 5}
      this.tower = {
        floors: [
          [this.com, this.res, this.com, this.res],
          [this.res, this.com, this.res],
        ],
        funds: 1000,
      }

      this.towerResources = function () {
        return this.tower.floors
        .reduce((a,b) => a.concat(b))
        .reduce((a,b) => {
          return {
            netRevenue: a.netRevenue + b.netRevenue,
            population: a.population + b.population
           }
        })
      }
    }
})()
