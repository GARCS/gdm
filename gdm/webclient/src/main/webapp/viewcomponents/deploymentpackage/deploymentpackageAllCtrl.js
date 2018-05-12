/**
 * This controller facilitates the deploymentpackage.all.html - view to display all deploymentpackages. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('gdmApp.deploymentpackage').controller('deploymentpackageAllCtrl', deploymentpackageAllCtrl);
	deploymentpackageAllCtrl.$inject = ['deploymentpackageConnectorFactory', 'gotoDeploymentPackage'];
	function deploymentpackageAllCtrl(deploymentpackageConnectorFactory, gotoDeploymentPackage) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteDeploymentPackage = deleteDeploymentPackage;
		ctrl.gotoDeploymentPackage = gotoDeploymentPackage;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.deploymentpackageAll = [];
			ctrl.deploymentpackage = {};
			ctrl.idSelected = null;
			deploymentpackageConnectorFactory.getDeploymentPackageAll().then(setDeploymentPackageAll, null);
		}
		
		function refresh() {
			deploymentpackageConnectorFactory.getDeploymentPackageAll().then(setDeploymentPackageAll, function() {});
		};
		
		function deleteDeploymentPackage(id) {
			deploymentpackageConnectorFactory.deleteDeploymentPackage(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setDeploymentPackageAll(response) {
			ctrl.deploymentpackageAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoDeploymentPackage.all();
		};
	};
})();