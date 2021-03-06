(function() {
	'use strict';
	/**
	 *  Declare app level module which depends on views, and components.
	 */
	angular.module('gdmApp', [
		'tmh.dynamicLocale', // angular-dynamic-locale
		'moment-picker',
	    'pascalprecht.translate',
	'gdmApp.deploymentpackage',
	'gdmApp.selfconfig',

	    //DO NOT DELETE ###GENERATION### include generated files
		'ngRoute'
	]);
	
	/**
	 * Language Configuration via module pascalprecht.translate.
	 */
	angular.module('gdmApp').config(['$translateProvider', function($translateProvider) {
		$translateProvider
		.useStaticFilesLoader({
			prefix: 'localization/translations-',
			suffix: '.json'
		})
        .registerAvailableLanguageKeys(['en-US', 'de-DE'], {
             'en*': 'en-US',
             'de*': 'de-DE',
         })
		.determinePreferredLanguage()
		.useSanitizeValueStrategy('escaped') // Security for escaping variables
		.usePostCompiling(true); // Post compiling angular filters
	}]);
	
	/**
	 * Configuration for locale.
	 */
	angular.module('gdmApp')
	.config(['tmhDynamicLocaleProvider', function(tmhDynamicLocaleProvider) {
		var locale = window.navigator.userLanguage || window.navigator.language;
		if (locale.includes('de')) {
				tmhDynamicLocaleProvider.defaultLocale('de-de');
				tmhDynamicLocaleProvider.localeLocationPattern('localization/angular-locale_de-de.js');
		} else {
				tmhDynamicLocaleProvider.defaultLocale('en-us');
				tmhDynamicLocaleProvider.localeLocationPattern('localization/angular-locale_en-us.js');
		}
	}]);
	
	/**
	 * Date-picker configuration.
	 */
	angular.module('gdmApp').config(['momentPickerProvider', function (momentPickerProvider) {
			var locale = window.navigator.userLanguage || window.navigator.language;
			momentPickerProvider.options({
	        /* Picker properties */
	    	locale:		locale,
	        format:        'LL',
	        minView: 	'month',
	        maxView: 	'day',
	        startView:     'day',
	        autoclose:     true,
	        today:         false,
	        keyboard:      false
		});
	}]);

	/**
	 * Filter
	 */
	angular.module('gdmApp')
	.filter('formatLocalDate', function ($filter) {
	   return function (date) {
	       if (date) {
	    	   moment.locale(window.navigator.userLanguage || window.navigator.language);
	           return moment(date).format("LL");
	       }
	       else
	           return "";
	   };
	})
	.filter('formatLocalTime', function ($filter) {
	   return function (date) {
	       if (date) {
	    	   moment.locale(window.navigator.userLanguage || window.navigator.language);
	           return moment(date).format("LLL");
	       }
	       else
	           return "";
	   };
	});
	
	angular.module('gdmApp').controller('appController', appController);
	
	/**
	 * Controller for global behavior when changing the view (routeChange).
	 * @param $scope
	 * @returns
	 */
	function appController($scope) {
		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
			$scope.title=next.title;
			$scope.subtitle=next.subtitle;
		});
	}

	/**
	 * Factories used globally in gdmApp. 
	 * To keep the scope as small as possible, add factories only used by submodules in the submodule itself.
	 */		
	angular.module('gdmApp').factory('restConnectorFactory', restConnectorFactory);
})();
