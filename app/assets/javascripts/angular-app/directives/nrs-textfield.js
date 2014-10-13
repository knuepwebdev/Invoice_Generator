angular.module('invoice')
  .directive('nrsTextfield', function() {
    return {
      restrict: 'E',
      scope: {
        'field': '=data',
        'getData': '&',
        'index': '='
      },
      template: '<div class="form-group"><div class="col-sm-{{field.width}}"><input class="form-control" id="{{field.name}}" placeholder="{{field.name}}" ng-model="field.name" ng-change="getData()" /><div>{{field.name}}</div>'
    };
  });
