$(function() {
  $('#invoice_creator_service_report_date').datepicker();
  $('#invoice_date').datepicker();

  // align labor data
  $('#subtotal-labor').offset({top: $('#labor').offset().top});
  //align travel data
  $('#select_travel').change(function() {
    if ( $('#select_travel').val() === '1') {
      $('#subtotal-travel').offset({top: $('#travel').offset().top});
    }
  });
  //align mileage data
  $('#select_mileage').change(function() {
    if ( $('#select_mileage').val() === '1') {
      $('#subtotal-mileage').offset({top: $('#mileage').offset().top});
    }
  });

  $('#select_parts').change(function() {
    if ($('#select_parts').val() === '1') {
      alignListItems();
    }
  });

  $('#add-part').click(function() {
    alignListItems();
  });

  function alignListItems() {
    console.log('alignListItems');
    $('#part-numbers').children('li').each(function(index) {
      var top = $('#part-name-' + (index + 1)).offset().top;
      $('#part-number-' + (index + 1)).offset({top: top});   
      $('#part' + (index + 1) + '-subtotal').offset({top: top});   
    });
  }
});
