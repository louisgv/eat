// .directive('groupedRadio', )

function groupedRadio() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      model: '=ngModel',
      value: '=groupedRadio',
      on: '=',
      off: '='
    },
    link: function (scope, element, attrs, ngModelCtrl) {
      element.addClass('button');
      element.addClass('button-'+ attrs.off);
      element[0].innerText = scope.value;
      element.on('click', function (e) {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(scope.value);
        });
      });

      scope.$watch('model', function (newVal) {
        element.removeClass('button-' + attrs.on);
        if(newVal === scope.value) {
          element.addClass('button-' + attrs.on);
        }
      });
    }
  };
}
