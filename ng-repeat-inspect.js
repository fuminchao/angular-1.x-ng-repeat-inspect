//

angular
.module('angular.ngRepeat.inspect', [])
.directive('ngRepeatInspect', ['ngRepeatDirective', function(ngRepeatDirective){

  return {
    restrict: 'A',
    priority: ngRepeatDirective[0].priority + 1,
    link: function($scope, $element ,$attr){

      if ( $attr.ngRepeat === void 0 ) {
        throw 'ngRepeat required!!!';
      }

      var __new__ = $scope.$new;
      $scope.$new = function(){
        let newScope = __new__.apply( this, arguments );

        Object.defineProperty(newScope, '$last', {
          get: function(){
            return this.__last;
          },
          set: function(b){
            if ( b ){
              // inspect
            }
            this.__last = b;
          },
        });

        return newScope;
      };
    },
  };
}]);