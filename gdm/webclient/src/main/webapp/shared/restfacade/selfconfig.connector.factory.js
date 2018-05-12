selfconfigConnectorFactory = ['$http', '$location', 'restConnectorFactory', function selfconfigConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getSelfConfigAll: getSelfConfigAll,
    		loadSelfConfig: loadSelfConfig,
    		createSelfConfig: createSelfConfig,
    		updateSelfConfig: updateSelfConfig,
    		deleteSelfConfig : deleteSelfConfig
     };
    return factory;
	
	function getSelfConfigAll() {
		return $http.get('api/selfconfig/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadSelfConfig(id) {
		return $http.get('api/selfconfig/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createSelfConfig(selfconfig) {
		return $http.put('api/selfconfig/', selfconfig)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateSelfConfig(selfconfig) {
		return $http.post('api/selfconfig/', selfconfig)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteSelfConfig(id) {
		return $http.delete('api/selfconfig/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];