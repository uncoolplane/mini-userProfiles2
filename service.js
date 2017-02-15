angular.module('userProfiles').service('mainService', function($http) {

	// var data = [
  //   {
  //       "id": 0,
  //       "first_name": "george",
  //       "last_name": "bluth",
  //       "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  //   },
  //   {
  //       "id": 1,
  //       "first_name": "lucille",
  //       "last_name": "bluth",
  //       "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  //   },
  //   {
  //       "id": 2,
  //       "first_name": "oscar",
  //       "last_name": "bluth",
  //       "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  //   }
  // ];

	var users = [];
  this.getUsers = function() {
		//function being invoked, returns a promise (object with method "then")
		return $http({
			method: 'GET',
			url: 'https://reqres.in/api/users?page=1'
		}).then(function(response) { //callback function that is returning our data
			console.log('service', response.data.data);
			users = response.data.data;
			return users;
		});
		// return data;
  };

	this.toggleFavorite = function(id) {
		users.forEach(function(user) {
			if(user.id === id) {
				user.isFavorite = !user.isFavorite;
			}

		})
	}
});
