angular.module('starter.controllers', [])

.factory("Info", function($firebaseArray) {
  var infosRef = new Firebase("https://triggered-4e761.firebaseio.com/SOS");
  return $firebaseArray(infosRef);
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
<<<<<<< HEAD
=======
})



.controller('SOSCtrl', function($scope, $ionicPopup,$stateParams,Info) {
   $scope.infos = Info;
   
    // When button is clicked, the popup will be shown...
   $scope.showPopup = function(tipo) {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: 'Seguro que queres mandar un SOS?',
         title: 'Enviar SOS',
         scope: $scope,
      
         buttons: [
            { text: 'Cancel' }, 
            {text: '<b>Save</b>',
             type: 'button-positive',
                  onTap: function(e) {
                    var options = {
                        enableHighAccuracy: true
                    };
                    var latlon;
                      navigator.geolocation.getCurrentPosition(function(pos) {
                         $scope.infos.$add({
                           "tipo": tipo,
                            "lat":pos.coords.latitude,
                            "lon": pos.coords.longitude,
                            "usu":"pepe"
                          });               
                      }, 
                      function(error) {                    
                          alert('Unable to get location: ' + error.message);
                      }, options);

                          
                           
                  }
            }
         ]
      });

      myPopup.then(function(res) {
        
      });    
   };
})

.controller('mapaCtrl', function($scope, $stateParams,$firebaseArray,$timeout,Info) {

  var options = {
                  enableHighAccuracy: true
                };

  navigator.geolocation.getCurrentPosition(function(pos) {
                         $scope.inicial=({
                            "lat":pos.coords.latitude,
                            "lon": pos.coords.longitude
                          });               
                      },
                      function(error) {                    
                          alert('Unable to get location: ' + error.message);
                      }, options);

  $scope.marcasMapa =Info;

  
>>>>>>> 4ac53e747cdd16acf8520351a12df63edfc92a22
});



