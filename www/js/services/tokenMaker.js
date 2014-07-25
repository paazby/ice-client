app.factory('TokenMaker', function($window) {

  var TokenMaker = {

    makeToken: function($window) {
      var apiKey =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJ6b3VuZHNfcGVla2luZyJ9.U-2sjzUTITlXuetMgYJJFEQ6LJQ-5mx1dLwUa6xQfFI';
      // var userToken = $window.localStorage.getItem('jwtToken');
      var userToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmYl9pZCI6IjE1In0.sCx2kRCyPY4wL8QMhEELWt4M_lwuYjsnDMW6P136Tos';
      return '?apiKey=' + apiKey + '&token=' + userToken;
    },

    eventApi: function() {
      return '4IP4VYD2JFW2MOT2Y7EC';
    }
  };

  return TokenMaker;

});