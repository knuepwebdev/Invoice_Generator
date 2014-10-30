angular.module('invoice')
  .directive('nrsToggler', [function() {
      function link(scope, element, attrs) {
        function showElement() {
          element.removeClass('hidden');
        }

        function hideElement() {
          element.addClass('hidden');
        }

        scope.$watch(attrs.nrsToggler, function(value) {
          if (value === 'No') {
            hideElement();
          } else {
            showElement();
          }
        });
      }

      return {
        link: link
      };
    }]);
