angular.module('invoice')
  .directive('nrsAlignData', function() {
    function link(scope, element, attrs) {
      function align() {
        var top = $('#' + attrs.nrsAlignData).offset().top;
        element.offset({ top: top });
      }      

      scope.$watch(attrs.nrsAlignData, function(value) {
        align();
      });
    }

    return {
      link: link
    }
  });
