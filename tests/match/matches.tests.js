describe('MatchesCtrl', function(){
  var scope;
  // mock application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('icebreaker'));
  // mock controller
  beforeEach(angular.mock.inject(function($rootScope, $controller){
    // create empty scope
    scope = $rootScope.$new();
    // declare controller and inject empty scope
    $controller('MatchesCtrl', {$scope: scope});
  }));

  it("should have variable text = 'hello world!'", function(){
    expect(scope.text).toBe("hello world!");
  });
});