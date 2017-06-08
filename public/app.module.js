(function () {
  const env = {}
  if (window) {
    Object.assign(env, window.__env);
  }
  angular.module('app', [])
    .constant('__env', env)
})()
