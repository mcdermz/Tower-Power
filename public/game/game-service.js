(function () {
  angular.module('app')
    .service('gameService', service)

    function service() {
      this.com = { name: 'com', netRevenue: 2}
      this.res = { name: 'res', netRevenue: -1}
      this.tower = {
        floors: [
          [this.com, this.res, this.com, this.res],
          [this.res, this.com, this.res],
        ],
        population: 0,
        funds: 1000,
      }

      this.cashFlow = function () {
        return this.tower.floors
        .reduce((a,b) => a.concat(b))
        .reduce((a,b) => {
          return { netRevenue: a.netRevenue + b.netRevenue }
        }).netRevenue
      }

      this.population = function () {
        
      }
    }
})()
