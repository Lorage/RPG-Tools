(function(){
  angular.module('rpgTools')
  .service('randomizerService', randomizerService);  
  
  function randomizerService(){
    var lists = [];
    var service = {
      lists: lists
    };
    
    return service;
    
  }
  
})();