var app = angular.module('customers', []);

var CustomerSearchController = function($scope) {
        $scope.search = function(searchTerm) {
            $scope.searchedFor = searchTerm;
    }
}

app.controller("CustomerSearchController", ["$scope", "$http",
              function($scope, $http) {
              $scope.search = function(searchTerm) {
               $http.get("/customers.json", 
                         {"params": { "keywords": searchTerm}}
                         ).then(function(response){
                             $scope.customers = response.data;
                         }, function(response){
                             alert("There was a problem: " + response.status);
                         });
        }
    }
]);

/*
$scope.customers = [];
$scope.search = function(searchTerm){
    $scope.customers = [
        {
            "first_name":"Schuyler",
            "last_name":"Cremin",
            "email":"giles@macgyver.net",
            "username":"jilian0",
            "created_at":"2015-03-04",
        },
        {
            "first_name":"Derick",
            "last_name":"Ebert",
            "email":"lupel@rennerfisher.org",
            "username":"ubaldo_kaulkel",
            "created_at":"2015-03-04",
        },
        {
            "first_name":"Schuyler",
            "last_name":"Johnson",
            "email":"giles@macgyver.net",
            "username":"duci",
            "created_at":"2015-03-04",
        }
        ]
}
*/