app.controller('busCtrl', ['$scope','simpleObj', function($scope,simpleObj) {
    $scope.viewData = simpleObj;
}]);
app.controller('busFormCtrl', ['$scope','simpleObj','$http', function($scope,simpleObj,$http) {
    $scope.postData = simpleObj;
    $scope.submit = function(e){
        e.preventDefault();
        $http.post('/detail/bus/add',$scope.postData).success(function(data){
            console.log(data);
        }).error(function () {
            console.log('error');
        })
    }
}]);

app.controller('busnoCtrl', ['$scope','simpleObj', function($scope,simpleObj) {
    $scope.viewData = simpleObj;
}]);
app.controller('busnoFormCtrl', ['$scope','simpleObj','$http', function($scope,simpleObj,$http) {
    $scope.postData = simpleObj;
    $scope.submit = function(e){
        e.preventDefault();
        $http.post('/detail/busno/add',$scope.postData).success(function(data){
            console.log(data);
        }).error(function () {
            console.log('error');
        })
    }
}]);

