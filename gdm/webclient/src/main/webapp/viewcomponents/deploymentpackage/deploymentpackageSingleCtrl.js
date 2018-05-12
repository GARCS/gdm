/**
 * This controller maintains a 'deploymentpackage object and belongs to the view 'deploymentpackage.single.html.
 */
(function() {
	'use strict';
	angular.module('gdmApp.deploymentpackage').controller('deploymentpackageSingleCtrl', deploymentpackageSingleCtrl);
	
	deploymentpackageSingleCtrl.$inject = ['$scope', '$routeParams', 'deploymentpackageConnectorFactory', 'gotoDeploymentPackage'];
	function deploymentpackageSingleCtrl($scope, $routeParams, deploymentpackageConnectorFactory, gotoDeploymentPackage) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoDeploymentPackage = gotoDeploymentPackage;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoDeploymentPackage.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? deploymentpackageConnectorFactory.updateDeploymentPackage : deploymentpackageConnectorFactory.createDeploymentPackage;
			saveFunction(ctrl.deploymentpackage).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.deploymentpackage != null && ctrl.deploymentpackage.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.deploymentpackage = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.deploymentpackage.id) {
					ctrl.deploymentpackage.id = $routeParams.id;
					deploymentpackageConnectorFactory.loadDeploymentPackage(ctrl.deploymentpackage.id).then(setDeploymentPackage, function(){});
				}
				if ($routeParams.id == null) {
					ctrl.deploymentpackage = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setDeploymentPackage(response) {
			ctrl.deploymentpackage = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setDeploymentPackage(response);
				gotoDeploymentPackage.all();
			}
		}
	
	}
})();