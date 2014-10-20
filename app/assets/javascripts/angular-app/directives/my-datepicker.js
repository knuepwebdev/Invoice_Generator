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
               var date = new Date(element.datepicker("getDate"));

               scope.$apply(function (scope) {
                  // Change bound variable
                  modelAccessor.assign(scope, date);
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