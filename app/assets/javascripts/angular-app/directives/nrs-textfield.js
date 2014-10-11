angular.module('invoice')
  .directive('nrsTextfield', function() {
    return {
      restrict: 'E',
      scope: {
        'fields': '=data'
      },
      template: '<div ng-repeat="field in fields" class="form-group"><div class="col-sm-{{field.width}}"><input class="form-control" id="{{field.name}}" placeholder="{{field.name}}" ng-model="field.name" /><div>{{field.name}}</div>'
    };
  });
