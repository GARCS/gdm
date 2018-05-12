/**
 * This controller facilitates the selfconfig.all.html - view to display all selfconfigs. 
 * It provides all needed functions for this view.
 */
(function() {
	'use strict';
	angular.module('gdmApp.selfconfig').controller('selfconfigAllCtrl', selfconfigAllCtrl);
	selfconfigAllCtrl.$inject = ['selfconfigConnectorFactory', 'gotoSelfConfig'];
	function selfconfigAllCtrl(selfconfigConnectorFactory, gotoSelfConfig) {
		
		var  ctrl = this;
		ctrl.refresh = refresh;
		ctrl.deleteSelfConfig = deleteSelfConfig;
		ctrl.gotoSelfConfig = gotoSelfConfig;
		ctrl.setSelected = setSelected;
		init();
		
		function setSelected(idSelected) { 
			ctrl.idSelected = idSelected; 
		}
		
		/** 
		 * Standard function for initialization.
		 */
		function init() {
			ctrl.selfconfigAll = [];
			ctrl.selfconfig = {};
			ctrl.idSelected = null;
			selfconfigConnectorFactory.getSelfConfigAll().then(setSelfConfigAll, null);
		}
		
		function refresh() {
			selfconfigConnectorFactory.getSelfConfigAll().then(setSelfConfigAll, function() {});
		};
		
		function deleteSelfConfig(id) {
			selfconfigConnectorFactory.deleteSelfConfig(id).then(deleteSuccess, function() {})
		};
		
		/**
		 * Used for setting the database result to the representation-object in the controller.
		 */
		function setSelfConfigAll(response) {
			ctrl.selfconfigAll = response;		
		}
		
		/**
		 * Success message after deleting.
		 */
		function deleteSuccess(response) {
			refresh();
			gotoSelfConfig.all();
		};
	};
})();