app.controller('productsCtrl', ['$scope','simpleObj', function($scope,simpleObj) {
    $scope.viewData = simpleObj;
}]);
app.controller('tourismsCtrl', ['$scope','simpleObj', function($scope,simpleObj) {
    $scope.viewData = simpleObj;
}]);
app.controller('productFormCtrl', ['$scope','simpleObj','$http', function($scope,simpleObj,$http) {
    $scope.postData = simpleObj;
    $scope.submit = function(e){
        e.preventDefault();
        $http.post('/detail/product/add',$scope.postData).success(function(data){
            console.log(data);
            location.href = '/view/navBar.html#/list?url=~2Ftourisms.html&ctrl=tourismsCtrl&get=tourisms';
        }).error(function () {
            console.log('error');
        })
    }
}]);
app.controller('tourismFormCtrl', ['$scope','simpleObj', '$http',function($scope,simpleObj,$http) {
    $scope.postData = simpleObj;
    $scope.submit = function(e){
        e.preventDefault();
        $http.post('/detail/tourism/add',$scope.postData).success(function(data){
            console.log(data);
            location.href = '/view/navBar.html#/list?url=~2Ftourisms.html&ctrl=tourismsCtrl&get=tourisms';
        }).error(function () {
            console.log('error');
        })
    }
}]);