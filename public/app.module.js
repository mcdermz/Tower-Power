(function () {
  const env = {}
  if (window) {
    Object.assign(env, window.__env);
  }
  angular.module('app', ['ngAnimate'])
    .constant('__env', env)
})()
