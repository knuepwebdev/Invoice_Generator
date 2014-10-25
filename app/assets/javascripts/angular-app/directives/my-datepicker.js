angular.module("invoice").directive('myDatepicker', function ($parse) {
   return {
      restrict: "E",
      replace: true,
      transclude: false,
      compile: function (element, attrs) {
         var modelAccessor = $parse(attrs.ngModel);

         var html = "<input type='text' placeholder='Date' id='" + attrs.id + "' >" +
            "</input>";

         var newElem = $(html);
         element.replaceWith(newElem);

         return function (scope, element, attrs, controller) {

            var processChange = function () {
               $.datepicker.formatDate( "mm-dd-yy", new Date(element.datepicker("getDate")));
               scope.$apply(function (scope) {
                  modelAccessor.assign(scope, $.datepicker.formatDate( "mm-dd-yy", new Date(element.datepicker("getDate"))));
               });
            };

            element.datepicker({
               inline: true,
               onClose: processChange,
               onSelect: processChange
            });
         };
      }
   };
});
