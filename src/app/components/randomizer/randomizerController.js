(function(){
	
	angular.module('rpgTools')
	.controller('randomizerController', ['$scope', 'randomizerService', 'fileReader', randomizerController]);
	
	function randomizerController($scope, randomizerService, fileReader){
			var vm = this;
      $scope.lists;
      $scope.pastEffects = [];
      
      console.log(fileReader);
      
      function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
      
      $scope.random = function (index) {
        var length = randomizerService.lists[index].list.length - 1;
        var num = getRandomArbitrary(0, length);
        
        if($scope.pastEffects[index] == undefined || $scope.pastEffects[index] == null){
          $scope.pastEffects[index] = [];
          
          $scope.pastEffects[index].splice(0, 0, randomizerService.lists[index].list[num]);
          console.log($scope.pastEffects[index]);
        }
        else {
          $scope.pastEffects[index].splice(0, 0, randomizerService.lists[index].list[num]);
          console.log($scope.pastEffects[index]);
        }
        console.log($scope.pastEffects);
      };
      
      
      $scope.addFile = function(){
        console.log($scope.currentFile);
      }
      
      function handleFileSelect(evt) {
        var files = evt.target.files; 
        
        for (var i = 0, f; f = files[i]; i++) {
          var reader = new FileReader();
          reader.onload = function(e) {
            
            // e.target.result
            var result = e.target.result;

            var allTextLines = result.split(/\r\n|\n/);
            
            var object = {
              name: null,
              list: []
            };
            
            var lines = [];
            for (var i=0; i < allTextLines.length; i++) {
              var data = allTextLines[i].split('\n');
              var tarr;
              for (var j=0; j<data.length; j++) {
                  tarr = data[j];
              }
              
              lines.push(tarr);
            }

            object.name = lines[0];
            object.list = lines;

            randomizerService.lists.push(object);
            
            $scope.$apply(function(){
              $scope.lists = randomizerService.lists;
            });
            
            console.log($scope.lists);
          };
          
          reader.readAsText(f);
          $scope.addFile = null;
          
        }

      }
      
      $('#fileButton').click(function () {
          $("input[type='file']").trigger('click');
      });
      
      document.getElementById('files').addEventListener('change', handleFileSelect, false);
      
	}
	
})();