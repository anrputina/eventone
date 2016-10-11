'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
  function ($resource) {
    return $resource('api/articles/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

/*angular.module('articles').factory('ArticlesComments', function($http){
  var factory = {};
  factory.insertComment = function(data){
    return $http.post('/api/articles/:articleId/comments', {
      articleId: '@_id'
    });
  };
  return factory;
});*/


angular.module('articles').factory('ArticlesComments', ['$resource',
  function ($resource) {
    return $resource('api/articles/:articleId/comments', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);