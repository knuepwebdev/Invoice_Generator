angular.module('invoice')
  .directive('nrsAlignElement', function() {
    function link(scope, element, attrs) {
      function align() {
        var distance = $('#' + attrs.nrsAlignElement).offset().top;
        var newTop = distance + attrs.verticalOffset;
        element.offset({ top: newTop });
      }      

      scope.$watch(attrs.nrsAlignElement, function(value) {
        align();
      });
    }

    return {
      restrict: 'A',
      scope: {
        'nrsAlignElement': '=',
        'verticalOffset': '='
      },
      link: link
    }
  });
