angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers()
    .then(function(response) {
      console.log('controller', response);
      $scope.users = response; //response is manipulated in the service to return data set
      console.log('users', $scope.users);
    }, function(error) {
      console.err(error);
    }); //first success, second error
  }

  $scope.getUsers();
  $scope.toggleFavorite = mainService.toggleFavorite;
});
