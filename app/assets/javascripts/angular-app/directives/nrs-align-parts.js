angular.module('invoice')
  .directive('nrsAlignParts', function() {
    function link(scope, element, attrs) {
      function alignParts(index) {
        console.log('alignParts');
        console.log(element);
        console.log($('#part-name-' + (index + 1)));
          var top = $('#part-name-' + (index + 1)).offset().top;
          var taxTop = $('#input-tax').offset().top;
          $('#part-quantity-' + (index + 1)).offset({top: top});   
          $('#part-number-' + (index + 1)).offset({top: top});   
          $('#part' + (index + 1) + '-subtotal').offset({top: top});   
          $('#total-tax').offset({top: taxTop});   
      }

      scope.$watch(attrs.nrsAlignParts, function(value) {
        alignParts(value);
      });
    }

    return {
      link: link
    };
  });
