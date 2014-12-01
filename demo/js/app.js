(function(){

  var app = angular.module('nrzLightifyApp',[
    'ngRoute',
    'nrzLightify'
  ]);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/page1', {
      templateUrl: 'page1.html',
      controller: 'nrzLightifyPageCtrl'
    })
    .when('/page2', {
      templateUrl: 'page2.html',
      controller: 'nrzLightifyPageCtrl'
    })
    .otherwise({
      redirectTo: '/page1'
    });
  });

  app.controller('nrzLightifyCtrl', function($scope){
    $scope.heading = "Angularjs Bootstrap Lightify";
  });

  app.controller('nrzLightifyPageCtrl', function($scope, nrzLightify){
    $scope.lightifyMe = function(type, delaySeconds) {
      nrzLightify({
        type: type,
        text: 'A notification!'
      }, delaySeconds);
    };

    $scope.lightifyMeFlash = function(type, delaySeconds) {
      nrzLightify({
        type: 'info',
        text: 'Flash notification will appear when you change the route.'
      });
      
      nrzLightify.flash({
        type: type,
        text: 'A flash notification!'
      }, delaySeconds);
    };
  });

})();

