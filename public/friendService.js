angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http.post('/api/login', user);
    },

    getFriends() {
    	return $http.get('/api/profiles').then(function( response ) {
    		return response.data;
    	});
    }
  }
});
// .service('friendService', function( $http ) {
//
//
//     this.login = function( user ) {
//       /* FIX ME */
//       return $http.post('/api/login', user)
//     };
//
//     this.getFriends = function() {
//     	/* FIX ME */
//       return $http.get('/api/profiles').then(function(response) {
//         return response.data;
//       })
//     };
//
// });
