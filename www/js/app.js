// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'ngCordova',
  'ngMap'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller('MapCtrl', function($scope, MapService){
    $scope.map = MapService;
    $scope.map.getCurrentPosition();
  })

  .service('MapService', function ($q, $cordovaGeolocation, $ionicPopup) {
    var self = {
      // Se der erro, mostramos esse endereço como default
      'latitude': -23.562852,
      'longitude': -46.654433,
      'getCurrentPosition': function () {

        var d = $q.defer();

        // Primeiro vamos ter certeza de que o app foi
        // completamente carregado

        ionic.Platform.ready(function () {

          // Agora vamos pegar a localização atual do usuário

          $cordovaGeolocation
            .getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
            .then(function (position) {
              // Se der certo, adicionamos os valores de posicionamento
              self.latitude = position.coords.latitude;
              self.longitude = position.coords.longitude;

              d.resolve();

            }, function (err) {

              // Se der erro, mostramos uma mensagem ao usuário

              $ionicPopup.alert({
                title: 'Erro',
                template: err.message
              });

              d.reject(err);
            })
        });

        return d.promise;
      }
    };

    return self;
  })
