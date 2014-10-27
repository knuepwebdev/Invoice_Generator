angular.module('invoice')
  .directive('nrsAlignData', function() {
    function link(scope, element, attrs) {
      // console.log('labor .offset().top');
      // console.log($('#labor').offset().top);
      

    function alignLabor() {
      var top = $('#labor').offset().top;
      element.offset({ top: top });
    }      

      scope.$watch(attrs.nrsAlignData, function(value) {
        alignLabor();
      });
    }

    return {
      link: link
    }
  });




// ***OLD jQUERY CODE***

// $(function() {
//   $('#invoice_creator_service_report_date').datepicker();
//   $('#invoice_date').datepicker();
  //align travel data
  // $('#select_travel').change(function() {
  //   if ( $('#select_travel').val() === '1') {
  //     $('#subtotal-travel').offset({top: $('#travel').offset().top});
  //   }
  // });
  //align mileage data
  // $('#select_mileage').change(function() {
  //   if ( $('#select_mileage').val() === '1') {
  //     $('#subtotal-mileage').offset({top: $('#mileage').offset().top});
  //   }
  // });

  // $('#select_parts').change(function() {
  //   if ($('#select_parts').val() === '1') {
  //     alignListItems();
  //   }
  // });

  // $('#add-part').click(function() {
  //   alignListItems();
  // });
  // $('input').click(function() {
  //   alignLabor();
  //   positionTotal();    
  // });
  
  // function alignLabor() {
  //   $('#subtotal-labor').offset({top: $('#labor').offset().top});
  // }
  // function alignListItems() {
  //   $('#part-numbers').children('li').each(function(index) {
  //     var top = $('#part-name-' + (index + 1)).offset().top;
  //     var taxTop = $('#input-tax').offset().top;
  //     $('#part-quantity-' + (index + 1)).offset({top: top});   
  //     $('#part-number-' + (index + 1)).offset({top: top});   
  //     $('#part' + (index + 1) + '-subtotal').offset({top: top});   
  //     $('#total-tax').offset({top: taxTop});   
  //   });
  // }

  // function positionTotal() {
  //   var top = $('#subtotal-amount').offset().top + 100;
  //   $('#total-amount').offset({top: top});
  // }
// });
