'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication','Articles','NgMap',
  function ($scope, Authentication, Articles, NgMap) {
  	//Article Part for queries

    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.Film = {
      'scaledSize': [32, 32],
      'url': 'https://cdn3.iconfinder.com/data/icons/line/36/movie_camera-512.png'
    };

    $scope.Sport = {
      'scaledSize': [32, 32],
      'url': 'http://icons.iconarchive.com/icons/icons8/android/512/Sports-Running-Man-icon.png'
    };

    $scope.Default = {
      'scaledSize': [32, 32],
      'url': 'http://www.cliparthut.com/clip-arts/823/arrowhead-clip-art-823528.png'
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.articles = Articles.query();
    };

    // Map part for Markers
    NgMap.getMap().then(function(map){
      console.log('map',map);
      $scope.map = map;
    });

    $scope.ShowDetail = function (e, detail){
      console.log(detail);
      $scope.selectedEvent = detail;
      $scope.map.showInfoWindow('InfoEventMap', this);
    };

    $scope.getIcon = function(e, classEvent){
      console.log(classEvent);
      if(classEvent === 'Film'){
        return $scope.Film;
      }else if (classEvent === 'Sport'){
        return $scope.Sport;
      }else {
        return $scope.Default;
      }
    };

  }
]);
