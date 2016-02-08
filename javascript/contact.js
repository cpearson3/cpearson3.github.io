// Contact Form Controller
var app = app || {};

app.controller('ContactController', function($scope, $http) {
   
    $scope.sendMessage = function() {
        console.log('whtf');
        
        var url = 'http://clarencebeaulo.appspot.com/_/contact';
        
        var data = {
            'entry.2114468758': $scope.name,
            'entry.811579543': $scope.email,
            'entry.262687186': $scope.company,
            'entry.1531236409': $scope.message
        };
        
        $http({
            method: 'POST',
            url: url,
            data: $.param(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).then(function(result) {
              alert('Thank you. Your message has been sent.');
              console.log(result.data);
          }, function (result) {
              alert('There was an error sending the message.');
              console.log(result);
          });
    };
});