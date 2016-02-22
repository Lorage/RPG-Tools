(function(){

angular.module('rpgTools')
	.config(routes);
	
	function routes($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("randomizer");
		
		$stateProvider
			.state('tools', {
				url: "/tools",
				views: {
					'': {
						templateUrl: "./app/components/tools/toolsTemplate.html",
						controller: "toolController"
					}
				}
			})
			.state('randomizer', {
				url: "/randomizer",
				views: {
					'': {
						templateUrl: "./app/components/randomizer/randomizerTemplate.html",
						controller: "randomizerController",
            controllerAs: 'vm'
					}
				}
				
			});
			
	}

})();
