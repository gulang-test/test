'use strict';

describe('Controller: MynewcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('gitlistApp'));

  var MynewcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MynewcontrollerCtrl = $controller('MynewcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MynewcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
