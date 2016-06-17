var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    // $urlRouterProvider.otherwise("/list");
    //
    $stateProvider
        .state('products', {
            url: '/products',
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
            templateUrl: '/view/products.html',
            controller: 'productsCtrl'
        })
        .state('productForm', {
            url: 'product/form?id',
            templateUrl: '/view/productForm.html',
            controller: 'productFormCtrl',
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
            }
        })

        .state('tourisms', {
            url: '/tourisms',
            templateUrl: '/view/tourisms.html',
            controller: 'tourismsCtrl',
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
            }
        })
        .state('tourismForm', {
            url: 'tourism/form?id',
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
            templateUrl: '/view/tourismForm.html',
            controller: 'tourismFormCtrl'
        })
        
        
        
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
});
