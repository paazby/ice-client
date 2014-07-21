// var url = require('url');
// var queryString = require('querystring');
var app = angular.module('openfb', []);


  app.factory('OpenFB', function ($rootScope, $q, $window, $http) {

        var FB_LOGIN_URL = 'http://zavadil7.cloudapp.net/auth/facebook';
        // By default we store fbtoken in sessionStorage. This can be overriden in init()
        var tokenStore = window.localStorage;
        var oauthRedirectURL = 'http://zavadil7.cloudapp.net/linden/passman/dustytoken/';
        // Because the OAuth login spans multiple processes, we need to keep the success/error handlers as variables
        // inside the module instead of keeping them local within the login function.
        var deferredLogin;
        // Indicates if the app is running inside Cordova
        var runningInCordova;
        // Used in the exit event handler to identify if the login has already been processed elsewhere (in the oauthCallback function)
        var loginProcessed;

        document.addEventListener("deviceready", function () {
            runningInCordova = true;
        }, false);

        /**
         * @param redirectURL - The OAuth redirect URL. Optional. If not provided, we use sensible defaults.
         * @param store - The store used to save the Facebook token. Optional. If not provided, we use sessionStorage.
         */
        function init(redirectURL, store) {
            if (redirectURL) oauthRedirectURL = redirectURL;
            if (store) tokenStore = store;
        }

        /**
         * Login to Facebook using OAuth. If running in a Browser, the OAuth workflow happens in a a popup window.
         * If running in Cordova container, it happens using the In-App Browser. Don't forget to install the In-App Browser
         * plugin in your Cordova project: cordova plugins add org.apache.cordova.inappbrowser.
         * @param fbScope - The set of Facebook permissions requested
         */
        function login() {
          var loginWindow;
          // fbScope used if we want to request data from facebook
          var fbScope;
          deferredLogin = $q.defer();
          loginProcessed = false;
          logout();
          // _blank: forces an entire new browser to open (instead of a tab): need to open new browser in order to watch URL
          // location: hides the urls
          // todo: put location=no back in
          loginWindow = window.open(FB_LOGIN_URL , '_blank');

          // If the app is running in Cordova, listen to URL changes in the InAppBrowser until we get a URL with an access_token or an error
          if (runningInCordova) {
            loginWindow.addEventListener('loadstart', function (event) {
              var url = event.url;
              url = url.split('?');
              if (url[0] === oauthRedirectURL) {
                loginWindow.close();
                oauthCallback(url[1]);
              }
            });

            loginWindow.addEventListener('loadstop', function(event){
                var url = event.url;
                console.log('this is token: ', url);
            });
            loginWindow.addEventListener('exit', function () {
              // Handle the situation where the user closes the login window manually before completing the login process
              deferredLogin.reject({error: 'user_cancelled', error_description: 'User cancelled login process', error_reason: "user_cancelled"});
            });
          } else {
             loginWindow.addEventListener('loadstart', function (event) {
              var url = event.url;

              if (url.indexOf("access_token=") > 0 || url.indexOf("error=") > 0) {
                loginWindow.close();
                oauthCallback(url);
              }
            });
          }
          // Note: if the app is running in the browser the loginWindow dialog will call back by invoking the
          // oauthCallback() function. See oauthcallback.html for details.

          return deferredLogin.promise;

        }

       /* *
         * Called either by oauthcallback.html (when the app is running the browser) or by the loginWindow loadstart event
         * handler defined in the login() function (when the app is running in the Cordova/PhoneGap container).
         * @param url - The oautchRedictURL called by Facebook with the access_token in the querystring at the ned of the
         * OAuth workflow. */
         
        function oauthCallback(url) {
            // Parse the OAuth data received from Facebook
            var apiToken;
            var userToken;
            var obj;
            console.log('inside of oAuth, heres the url: ',  url);
            loginProcessed = true;
            var apiTokenIndex = url.indexOf('apiToken');
            var userTokenIndex = url.indexOf('token');
            if (apiTokenIndex !== -1 && userTokenIndex !== -1) {
                apiToken = url.slice(url.indexOf('=') + 1);
                console.log('setting token, heres the object', apiToken);
                tokenStore.setItem('jwtToken', apiToken);
                console.log('tokenStore.getItem', tokenStore.getItem('jwtToken'));

                // find second '=', then use substring from there
                userToken = url.slice.indexOf('=', url.indexOf('=') + 1) + 1;

                // remove the last 4 characters that fb attaches, that we don't want
                userToken = userToken.slice(0, -4);
                tokenStore.setItem('userToken', userToken);
                deferredLogin.resolve();
            } else {
                deferredLogin.reject();
            }
        }
        /**
         * Application-level logout: we simply discard the token.
         */
        function logout() {
            console.log('logout before', tokenStore.getItem('jwtToken'));
            tokenStore.setItem('jwtToken', '');
            console.log('logout after', tokenStore.getItem('jwtToken'));

            tokenStore.setItem('userToken', '');
        }

        /**
         * Helper function to de-authorize the app
         * @param success
         * @param error
         * @returns {*}
         */
        function revokePermissions() {
            return api({method: 'DELETE', path: '/me/permissions'})
                .success(function () {
                    console.log('Permissions revoked');
                });
        }

        /**
         * Lets you make any Facebook Graph API request.
         * @param obj - Request configuration object. Can include:
         *  method:  HTTP method: GET, POST, etc. Optional - Default is 'GET'
         *  path:    path in the Facebook graph: /me, /me.friends, etc. - Required
         *  params:  queryString parameters as a map - Optional
         */
        function api(obj) {

            var method = obj.method || 'GET',
                params = obj.params || {};

            params['access_token'] = tokenStore['fbtoken'];

            return $http({method: method, url: 'https://graph.facebook.com' + obj.path, params: params})
                .error(function(data, status, headers, config) {
                    if (data.error && data.error.type === 'OAuthException') {
                        $rootScope.$emit('OAuthException');
                    }
                });
        }

        /**
         * Helper function for a POST call into the Graph API
         * @param path
         * @param params
         * @returns {*}
         */
        function post(path, params) {
            return api({method: 'POST', path: path, params: params});
        }

        /**
         * Helper function for a GET call into the Graph API
         * @param path
         * @param params
         * @returns {*}
         */
        function get(path, params) {
            return api({method: 'GET', path: path, params: params});
        }

        function parseQueryString(queryString) {
            var qs = decodeURIComponent(queryString),
                obj = {},
                params = qs.split('&');
            params.forEach(function (param) {
                var splitter = param.split('=');
                obj[splitter[0]] = splitter[1];
            });
            return obj;
        }

        return {
            init: init,
            login: login,
            logout: logout,
            revokePermissions: revokePermissions,
            api: api,
            post: post,
            get: get,
            oauthCallback: oauthCallback
        }

    });

// Global function called back by the OAuth login dialog
function oauthCallback(url) {
    var injector = angular.element(document.getElementById('main')).injector();
    injector.invoke(function (OpenFB) {
        OpenFB.oauthCallback(url);
    });
}