deploymentpackageConnectorFactory = ['$http', '$location', 'restConnectorFactory', function deploymentpackageConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getDeploymentPackageAll: getDeploymentPackageAll,
    		loadDeploymentPackage: loadDeploymentPackage,
    		createDeploymentPackage: createDeploymentPackage,
    		updateDeploymentPackage: updateDeploymentPackage,
    		deleteDeploymentPackage : deleteDeploymentPackage
     };
    return factory;
	
	function getDeploymentPackageAll() {
		return $http.get('api/deploymentpackage/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadDeploymentPackage(id) {
		return $http.get('api/deploymentpackage/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createDeploymentPackage(deploymentpackage) {
		return $http.put('api/deploymentpackage/', deploymentpackage)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateDeploymentPackage(deploymentpackage) {
		return $http.post('api/deploymentpackage/', deploymentpackage)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteDeploymentPackage(id) {
		return $http.delete('api/deploymentpackage/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];