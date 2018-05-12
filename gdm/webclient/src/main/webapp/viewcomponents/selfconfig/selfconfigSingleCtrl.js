/**
 * This controller maintains a 'selfconfig object and belongs to the view 'selfconfig.single.html.
 */
(function() {
	'use strict';
	angular.module('gdmApp.selfconfig').controller('selfconfigSingleCtrl', selfconfigSingleCtrl);
	
	selfconfigSingleCtrl.$inject = ['$scope', '$routeParams', 'selfconfigConnectorFactory', 'gotoSelfConfig'];
	function selfconfigSingleCtrl($scope, $routeParams, selfconfigConnectorFactory, gotoSelfConfig) {
		var ctrl = this;
		
		ctrl.doMaintain = doMaintain;
		ctrl.gotoSelfConfig = gotoSelfConfig;
		init();

		/**
		 * Standard function to edit the project configuration.
		 */
		function doMaintain() {
			if (ctrl.form.$dirty) {
				doMaintainThenGoto();
			} else {
				gotoSelfConfig.all();
			}
		}
		
		function doMaintainThenGoto() {
			var saveFunction = isUpdate() ? selfconfigConnectorFactory.updateSelfConfig : selfconfigConnectorFactory.createSelfConfig;
			saveFunction(ctrl.selfconfig).then(saveSuccessCallback(), function(){});
		}

		function isUpdate() {
			return ctrl.selfconfig != null && ctrl.selfconfig.id != null;
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.selfconfig = {};
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if ($routeParams.id != undefined && $routeParams.id !== ctrl.selfconfig.id) {
					ctrl.selfconfig.id = $routeParams.id;
					selfconfigConnectorFactory.loadSelfConfig(ctrl.selfconfig.id).then(setSelfConfig, function(){});
				}
				if ($routeParams.id == null) {
					ctrl.selfconfig = {};
				}
			});
		}
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setSelfConfig(response) {
			ctrl.selfconfig = response;
		}
		
		/**
		 * Success message after saving.
		 */
		function saveSuccessCallback() {
			return function (response) {
				setSelfConfig(response);
				gotoSelfConfig.all();
			}
		}
	
	}
})();