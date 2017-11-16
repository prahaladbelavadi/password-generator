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

//
$scope.generatePassword = function(){
      $scope.password = "";
      for (var i=0; i<$scope.passwordLength; i++) {
        /* if upperCase : true,*/
        if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === false && $scope.checkboxModel.numbers === false && $scope.checkboxModel.symbols === false){
          $scope.temp = Math.floor(Math.random()*$scope.upperCaseArray.length);
          $scope.password += $scope.upperCaseArray[$scope.temp];
        }
        /*if lowerCase : true,*/
        else if($scope.checkboxModel.upperCase === false && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === false && $scope.checkboxModel.symbols === false){
          $scope.temp = Math.floor(Math.random()*$scope.lowerCaseArray.length);
          $scope.password += $scope.lowerCaseArray[$scope.temp];
        }
       /*if numbers   : true,*/
        else if($scope.checkboxModel.upperCase === false && $scope.checkboxModel.lowerCase === false && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === false){
          $scope.temp = Math.floor(Math.random()*$scope.numbersArray.length);
          $scope.password += $scope.numbersArray[$scope.temp];
        }
        /* if symbols   : true */
        else if($scope.checkboxModel.upperCase === false && $scope.checkboxModel.lowerCase === false && $scope.checkboxModel.numbers === false && $scope.checkboxModel.symbols === true){
          $scope.temp = Math.floor(Math.random()*$scope.symbolsArray.length);
          $scope.password += $scope.symbolsArray[$scope.temp];
        }

        /* if upperCase : true, & lowerCase : true,*/
        else if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === false && $scope.checkboxModel.symbols === false){
          $scope.upperLowerArray = $scope.upperCaseArray.concat($scope.lowerCaseArray);
          $scope.temp = Math.floor(Math.random()*$scope.upperLowerArray.length);
          $scope.password += $scope.upperLowerArray[$scope.temp];
        }
        /* if upperCase : true,& numbers   : true, */
        else if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === false && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === false){
          $scope.upperNumbersArray = $scope.upperCaseArray.concat($scope.numbersArray);
          $scope.temp = Math.floor(Math.random()*$scope.upperNumbersArray.length);
          $scope.password += $scope.upperNumbersArray[$scope.temp];
        }
        /* iflowerCase : true,& numbers   : true,*/
        else if($scope.checkboxModel.upperCase === false && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === false){
          $scope.lowerNumbersArray = $scope.lowerCaseArray.concat($scope.numbersArray);
          $scope.temp = Math.floor(Math.random()*$scope.lowerNumbersArray.length);
          $scope.password += $scope.lowerNumbersArray[$scope.temp];
        }
        /* if lowerCase : true, & symbols   : true*/
        else if($scope.checkboxModel.upperCase === false && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === false && $scope.checkboxModel.symbols === true){
          $scope.lowerSymbolsArray = $scope.lowerCaseArray.concat($scope.symbolsArray);
          $scope.temp = Math.floor(Math.random()*$scope.lowerSymbolsArray.length);
          $scope.password += $scope.lowerSymbolsArray[$scope.temp];
        }
        /* if numbers   : true, & symbols   : true */
        else if($scope.checkboxModel.upperCase === false && $scope.checkboxModel.lowerCase === false && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === true){
          $scope.numbersSymbolsArray = $scope.numbersArray.concat($scope.symbolsArray);
          $scope.temp = Math.floor(Math.random()*$scope.numbersSymbolsArray.length);
          $scope.password += $scope.numbersSymbolsArray[$scope.temp];
        }
        /* if upperCase : true, & symbols   : true */
        else if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === false && $scope.checkboxModel.numbers === false && $scope.checkboxModel.symbols === true){
          $scope.upperSymbolsArray = $scope.upperCaseArray.concat($scope.symbolsArray);
          $scope.temp = Math.floor(Math.random()*$scope.upperSymbolsArray.length);
          $scope.password += $scope.upperSymbolsArray[$scope.temp];
        }

        /* if upperCase : true, & lowerCase : true, & numbers   : true, */
        else if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === false){
          $scope.upperLowerArray = $scope.upperCaseArray.concat($scope.lowerCaseArray);
          $scope.upperLowerNumbersArray = $scope.upperLowerArray.concat($scope.numbersArray);
          $scope.temp = Math.floor(Math.random()*$scope.upperLowerNumbersArray.length);
          $scope.password += $scope.upperLowerNumbersArray[$scope.temp];
        }
        /*if lowerCase : true, & numbers   : true, & symbols   : true */
        else if($scope.checkboxModel.upperCase === false && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === true){
          $scope.lowerNumbersArray = $scope.lowerCaseArray.concat($scope.numbersArray);
          $scope.lowerNumbersSymbolsArray = $scope.lowerNumbersArray.concat($scope.symbolsArray);
          $scope.temp = Math.floor(Math.random()*$scope.lowerNumbersSymbolsArray.length);
          $scope.password += $scope.lowerNumbersSymbolsArray[$scope.temp];
        }
        /* if upperCase : true, & numbers   : true, & symbols   : true */
        else if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === false && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === true){
          $scope.numbersSymbolsArray = $scope.numbersArray.concat($scope.symbolsArray);
          $scope.numbersSymbolsUpperArray = $scope.numbersSymbolsArray.concat($scope.upperCaseArray);
          $scope.temp = Math.floor(Math.random()*$scope.numbersSymbolsUpperArray.length);
          $scope.password += $scope.numbersSymbolsUpperArray[$scope.temp];
        }
        /* if upperCase : true, & lowerCase : true, & symbols   : true */
        else if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === false && $scope.checkboxModel.symbols === true){
          $scope.upperLowerArray = $scope.upperCaseArray.concat($scope.lowerCaseArray);
          $scope.upperLowerSymbolsArray = $scope.upperLowerArray.concat($scope.symbolsArray);
          $scope.temp = Math.floor(Math.random()*$scope.upperLowerSymbolsArray.length);
          $scope.password += $scope.upperLowerSymbolsArray[$scope.temp];
        }

        /* if all Are true*/
        else if($scope.checkboxModel.upperCase === true && $scope.checkboxModel.lowerCase === true && $scope.checkboxModel.numbers === true && $scope.checkboxModel.symbols === true){
          $scope.upperLowerArray = $scope.upperCaseArray.concat($scope.lowerCaseArray);
          $scope.numbersSymbolsArray = $scope.numbersArray.concat($scope.symbolsArray);
          $scope.upperLowerSymbolsNumbersArray = $scope.upperLowerArray.concat($scope.numbersSymbolsArray);
          $scope.temp = Math.floor(Math.random()*$scope.upperLowerSymbolsNumbersArray.length);
          $scope.password += $scope.upperLowerSymbolsNumbersArray[$scope.temp];
        }
        /* if all are false*/
        else{
          // nothing happens
        }
      }
    };
//

});
