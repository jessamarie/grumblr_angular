/* global angular */
(function () {
  angular
  .module('grumblr', [
    'ui.router'
  ])

  .config([
    '$stateProvider',
    '$locationProvider',
    Router])

  .controller('GrumbleIndexController', [GrumbleIndexController])
  .controller('GrumbleShowController', [
    '$stateParams',
    GrumbleShowController
  ])
  .controller('GrumbleNewController', [
    '$state',
    GrumbleNewController
  ])

  function Router ($stateProvider, $locationProvider) {
    // $locationProvider.html5Mode(true)

    $stateProvider
    .state('grumbleIndex', {
      url: '/grumbles',
      controller: 'GrumbleIndexController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/index.html'
    })
    .state('grumbleNew', {
      url: '/grumbles/new',
      controller: 'GrumbleNewController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/new.html'
    })
    .state('grumbleShow', {
      url: '/grumbles/:id',
      controller: 'GrumbleShowController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/show.html'
    })
  }

  function GrumbleIndexController () {
    this.grumbles = grumbles
  }

  function GrumbleShowController ($stateParams) {
    // console.log($stateParams)
    this.grumble = grumbles[$stateParams.id]
  }

  function GrumbleNewController ($state) {
    console.log('new Controller Works')

    this.create = function () {
      console.log(this.newGrumble)
      console.log(this.grumbles)
      this.grumbles.push(this.newGrumble)
      $state.go('id', {
        id: this.grumbles.length - 1
      })
    }
  }
})()
