/** 
 * Navigation and routing for module 'gdmApp.deploymentpackage.
 */
(function() {
'use strict';

	angular.module('gdmApp.deploymentpackage').factory('gotoDeploymentPackage', gotoDeploymentPackage);

	function gotoDeploymentPackage($location) {
		var factory = {};
		factory.all = function() {
	    	$location.path('/viewcomponents/deploymentpackage-all/');
	    },
	    factory.update = function(id) {
	    	$location.path('/viewcomponents/deploymentpackage-maintain/update/' + id);
	    },
	    factory.create = function() {
	    	$location.path('/viewcomponents/deploymentpackage-maintain/create/');
	    },
	    factory.loaderror = function() {
	    	$location.path('/');
	    }
		return factory;
    };
    
   	angular.module('gdmApp.deploymentpackage') 
   	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/viewcomponents/deploymentpackage-all/', {
			controller : 'deploymentpackageAllCtrl',
			controllerAs : 'ctrl',
			title : "deploymentpackage.all.title",
			subtitle : "",
			templateUrl : "viewcomponents/deploymentpackage/deploymentpackage.all.html",
	        resolve: {
	        	deploymentpackageConnectorFactory: deploymentpackageConnectorFactory
	         }
		}).when('/viewcomponents/deploymentpackage-maintain/create/', {
			controller : 'deploymentpackageSingleCtrl',
			controllerAs : 'ctrl',
			title : "deploymentpackage.create.title",
			subtitle : "",
			templateUrl : "viewcomponents/deploymentpackage/deploymentpackage.single.html",
			resolve: {
	        	deploymentpackageConnectorFactory: deploymentpackageConnectorFactory
	         }		
		}).when('/viewcomponents/deploymentpackage-maintain/update/:id', {
			controller : 'deploymentpackageSingleCtrl',
			controllerAs : 'ctrl',
			title : "deploymentpackage.update.title",
			subtitle : "",
			templateUrl : "viewcomponents/deploymentpackage/deploymentpackage.single.html",
	        resolve: {
	        	deploymentpackageConnectorFactory: deploymentpackageConnectorFactory
	         }		
		});
	}]);
})();