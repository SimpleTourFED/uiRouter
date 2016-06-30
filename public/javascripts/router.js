var app = angular.module('app', ['ui.router','oc.lazyLoad']);
app.config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;
    }
    ]);
app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    // $urlRouterProvider.otherwise("/list");
    //
    $stateProvider
        // product
        .state('products', {
            url: '/products',
            views: {
                "lazyLoadView": {
                    controller: 'productsCtrl', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: '/view/products.html'
                }
            },
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/product.js');
                }],
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
        })
        .state('productForm', {
            url: 'product/form?id',
            templateUrl: '/view/productForm.html',
            controller: 'productFormCtrl',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/product.js');
                }],
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
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/product.js');
                }],
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
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/product.js');
                }],
                simpleObj: function ($stateParams,$http) {
                    if($stateParams.id){
                        return $http({
                            method:'GET',
                            url:'/detail/tourisms/detail/'+$stateParams.id
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
        
        // bus
        .state('bus', {
            url: '/bus',
            views: {
                "lazyLoadView": {
                    controller: 'busCtrl', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: '/view/bus.html'
                }
            },
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/bus.js');
                }],
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
        })
        .state('busForm', {
            url: 'bus/form?id',
            templateUrl: '/view/busForm.html',
            controller: 'busFormCtrl',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/bus.js');
                }],
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
        
        .state('list', {
            url: '/list?url&ctrl&get',
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/product.js');
                }],
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
