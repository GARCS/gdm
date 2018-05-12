/** 
 * Navigation and routing for module 'gdmApp.selfconfig.
 */
(function() {
'use strict';

	angular.module('gdmApp.selfconfig').factory('gotoSelfConfig', gotoSelfConfig);

	function gotoSelfConfig($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/selfconfig-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/selfconfig-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/selfconfig-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('gdmApp.selfconfig') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/selfconfig-all/', {
			controller : 'selfconfigAllCtrl',
			controllerAs : 'ctrl',
			title : "selfconfig.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/selfconfig/selfconfig.all.html",
	        resolve: {
	        	selfconfigConnectorFactory: selfconfigConnectorFactory
	         }
		}).when('/viewcomponents/selfconfig-maintain/create/', {
			controller : 'selfconfigSingleCtrl',
			controllerAs : 'ctrl',
			title : "selfconfig.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/selfconfig/selfconfig.single.html",
			resolve: {
	        	selfconfigConnectorFactory: selfconfigConnectorFactory
	         }		
		}).when('/viewcomponents/selfconfig-maintain/update/:id', {
			controller : 'selfconfigSingleCtrl',
			controllerAs : 'ctrl',
			title : "selfconfig.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/selfconfig/selfconfig.single.html",
	        resolve: {
	        	selfconfigConnectorFactory: selfconfigConnectorFactory
	         }		
		});
	}]);
})();