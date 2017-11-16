var app =angular.module('passwordGenerator',[]);

app.controller('PasswordGeneratorController', function($scope){

    $scope.checkboxModel = {
           symbols : false,
           numbers : false,
           upperCase : false,
           lowerCase : false
         };

         // variables and Array's
      $scope.passwordLength = '';
      $scope.password = '';
      $scope.upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                               'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                               'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      $scope.lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                               'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                               's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      $scope.numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

      $scope.symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
                             '_', '-', '+', '=', '{', '}', '[', ']', '|', '\\', ':',
                             ';', '"', '\'', '<', '>', ',', '.', '?', '/', '`', '~'];

});
