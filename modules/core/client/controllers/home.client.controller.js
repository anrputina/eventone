'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication','Articles','NgMap','$modal',
  function ($scope, Authentication, Articles, NgMap, $modal, $log) {
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

    $scope.ShowDetail = function (e, event){
      console.log(event);
      $scope.selectedEvent = event;
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

    $scope.open = function (e, event, size) {
      console.log(event);
      $scope.selectedEvent = event;

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          item: function () {
            return event;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
        console.log(event);
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

  }
]);

angular.module('core').controller('ModalInstanceCtrl', function ($scope, $modalInstance, item, Authentication, ArticlesComments) {
  $scope.item = item;
  $scope.authentication = Authentication;
  
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.insertComments = function(){

    $scope.error = null;

    var comment = new ArticlesComments ({
      titolo: 'qualcosa',
      contenuto: 'di nuovo'
    });

    comment.$save({ articleId:$scope.item._id },
      function(response){
        console.log(response);
      });

    //$scope.$digest();
       
  };
});