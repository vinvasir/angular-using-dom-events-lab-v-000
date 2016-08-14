function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			$scope.count = 0;
		},
		link: function(scope, elem, attrs, ctrl, transclude){
			elem.on('click', function(){
				scope.count++;
				scope.$apply();
			});

			elem.$on('destroy', function(){
				elem.off();
			});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);