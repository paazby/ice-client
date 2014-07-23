app.factory('httpRequestInterceptor', function($window) {
  
  return {

    // makeToken: function($window) {
    //   var apiKey = $window.localStorage.getItem('jwtToken');
    //   // var apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJ6b3VuZHNfcGVla2luZyJ9.U-2sjzUTITlXuetMgYJJFEQ6LJQ-5mx1dLwUa6xQfFI';
    //   var userToken = $window.localStorage.getItem('userToken');
    //   // var userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmYl9pZCI6IjcxNDA4OTMwNTMwMzM2NSJ9.VhKU-hHYhjboq882KWufV9_Mj4V9iOljM5yb_aC1wZg';
    //   return '?apiKey=' + apiKey + '&token=' + userToken; 
    // },

    // eventApi: function() {
    //   return '4IP4VYD2JFW2MOT2Y7EC';
    // }

    request: function(config) {
      if (config.url.indexOf('zavadil7') !== -1) {
        var apiKey = $window.localStorage.getItem('jwtToken');
        var userToken = $window.localStorage.getItem('userToken');
        config.url = config.url + '/?apiKey=' + apiKey + '&token=' + userToken;
      }
      return config;
    }
  };

});