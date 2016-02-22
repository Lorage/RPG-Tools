(function(){
  angular.module('rpgTools')
  .directive('uploadDirective', uploadDirective);  
  
  function uploadDirective(){
      return {
        link: function($scope, el){
          
          el.bind("change", function(e){
            console.log(e);
            $scope.file = (e.srcElement || e.target).files[0];
            $scope.getFile();
            console.log($scope.file);
          });
          
        }
        
      }
    
  }
  
})();