// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        	controller: 'login'
      }
    }
  })
  .state('app.stepone', {
      url: '/stepone',
      views: {
        'menuContent': {
          templateUrl: 'templates/stepone.html',
        	controller: 'stepone'
        }
      }
    })
  .state('app.steptwo', {
      url: '/steptwo',
      views: {
        'menuContent': {
          templateUrl: 'templates/steptwo.html',
        	controller: 'steptwo'
        }
      }
    })
  .state('app.stepthree', {
      url: '/stepthree',
      views: {
        'menuContent': {
          templateUrl: 'templates/stepthree.html',
        	controller: 'stepthree'
        }
      }
    })
  .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
        }
      }
    })

    .state('app.companies', {
      url: '/companies',
      views: {
        'menuContent': {
          templateUrl: 'templates/companies.html',
        	controller: 'companies'
        }
      }
    })

    .state('app.suggestions-row', {
      url: '/suggestions',
      views: {
        'menuContent': {
          templateUrl: 'templates/suggestions-row.html',
          controller: 'suggestions'
        }
      }
    })

    .state('app.suggestions-square', {
      url: '/suggestions',
      views: {
        'menuContent': {
          templateUrl: 'templates/suggestions-square.html',
          controller: 'suggestions'
        }
      }
    })

  .state('app.suggestions', {
    url: '/suggestions/:suggestionid',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
