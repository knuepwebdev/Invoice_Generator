angular.module('invoice')
  .directive('nrsAlignElement', function() {
    function link(scope, element, attrs) {
      function align() {
        var top = $('#' + attrs.nrsAlignElement).offset().top;
        element.offset({ top: (top + attrs.verticalOffset) });
      }      

      scope.$watch(attrs.nrsAlignData, function(value) {
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
