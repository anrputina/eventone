'use strict';

angular.module('core').controller('map-controller', ['$scope','NgMap',
  function($scope, NgMap){

    $scope.points = [
      { 'name': 'Canberra', 'latitude': -35.282614, 'longitude': 149.127775 }
    ];

    $scope.customIcon = {
      'scaledSize': [32, 32],
      'url': 'http://www.cliparthut.com/clip-arts/823/arrowhead-clip-art-823528.png'
    };

  }]);
