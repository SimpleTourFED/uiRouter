var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    // $urlRouterProvider.otherwise("/list");
    //
    $stateProvider
        .state('list', {
            url: '/list?url&ctrl&get',
            resolve: {
                simpleObj: function ($stateParams,$http) {
                    return $http({
                        method:'GET',
                        url:$stateParams.get+'/list'
                    }).then(function(resp){
                        return resp.data;
                    },function(resp){
                    });
                }
            },
            templateUrl: function ($stateParams) {
                return '/view/'+$stateParams.url
            },
            controllerProvider: function ($stateParams) {
                return $stateParams.ctrl
            }
        })
        .state('add', {
            url: '/add?url&ctrl',
            resolve: {
                simpleObj: function ($stateParams) {
                    return {}
                }
            },
            templateUrl: function ($stateParams) {
                return '/view/'+$stateParams.url
            },
            controllerProvider: function ($stateParams) {
                return $stateParams.ctrl
            }
        })
        .state('productEdit', {
            url: '/edit?url&ctrl&id',
            resolve: {
                simpleObj: function ($stateParams,$http) {
                    if($stateParams.id){
                        return $http({
                            method:'GET',
                            url:'/detail/products/detail/'+$stateParams.id
                        }).then(function(resp){
                            return resp.data;
                        },function(resp){
                        });
                    }else{
                        return false
                    }
                }
            },
            templateUrl: function ($stateParams) {
                return '/view/'+$stateParams.url
            },
            controllerProvider: function ($stateParams) {
                return $stateParams.ctrl
            }
        })
        .state('tourismEdit', {
            url: '/edit?url&ctrl&id',
            resolve: {
                simpleObj: function ($stateParams,$http) {
                    if($stateParams.id){
                        return $http({
                            method:'GET',
                            url:'/detail/products/detail/'+$stateParams.id
                        }).then(function(resp){
                            return resp.data;
                        },function(resp){
                        });
                    }else{
                        return false
                    }
                }
            },
            templateUrl: function ($stateParams) {
                return '/view/'+$stateParams.url
            },
            controllerProvider: function ($stateParams) {
                return $stateParams.ctrl
            }
        })
});
app.controller('productsCtrl', ['$scope','simpleObj', function($scope,simpleObj) {
    $scope.viewData = simpleObj;
}]);
app.controller('tourismsCtrl', ['$scope','simpleObj', function($scope,simpleObj) {
    $scope.viewData = simpleObj;
}]);
app.controller('productEditCtrl', ['$scope','simpleObj','$http', function($scope,simpleObj,$http) {
    $scope.postData = simpleObj;
    $scope.submit = function(e){
        e.preventDefault();
        $http.post('/detail/product/add',$scope.postData).success(function(data){
            console.log(data);
        }).error(function () {
            console.log('error');
        })
    }
}]);
app.controller('tourismEditCtrl', ['$scope','simpleObj', '$http',function($scope,simpleObj,$http) {
    $scope.postData = simpleObj;
    $scope.submit = function(e){
        e.preventDefault();
        $http.post('/detail/tourism/add',$scope.postData).success(function(data){
            console.log(data);
        }).error(function () {
            console.log('error');
        })
    }
}]);