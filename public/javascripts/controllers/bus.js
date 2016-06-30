app.controller('busCtrl', ['$scope','simpleObj', function($scope,simpleObj) {
    $scope.viewData = simpleObj;
}]);
app.controller('busFormCtrl', ['$scope','simpleObj','$http', function($scope,simpleObj,$http) {
    $scope.postData = simpleObj;
    $scope.submit = function(e){
        e.preventDefault();
        $http.post('/detail/product/add',$scope.postData).success(function(data){
            console.log(data);
            location.href = '/view/index.html#/list?url=~2Fproducts.html&ctrl=productsCtrl&get=products';
        }).error(function () {
            console.log('error');
        })
    }
}]);

