angular.module('icebreaker').filter('calendar', function() {
  return function(date) {
    return moment(date).calendar();
  };
});