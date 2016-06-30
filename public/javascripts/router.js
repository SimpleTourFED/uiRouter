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
        /****************  
        **  product路由 **
        *****************/
        // product
        .state('products', {
            url: '/products',
            views: {
                "lazyLoadView": {
                    controller: 'productsCtrl', 
                    templateUrl: '/view/products.html'
                }
            },
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/product.js');
                }],
                simpleObj: function ($http) {
                    return $http({
                        method:'GET',
                        url:'/products/list'
                    }).then(function(resp){
                        return resp.data;
                    },function(resp){
                    });
                }
            },
        })
        .state('productForm', {
            url: 'product/form?id',
            views: {
                "lazyLoadView": {
                    controller: 'productFormCtrl', 
                    templateUrl: '/view/productForm.html'
                }
            },
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
        // tourism
        .state('tourisms', {
            url: '/tourisms',
            views: {
                "lazyLoadView": {
                    controller: 'tourismsCtrl',
                    templateUrl: '/view/tourisms.html'
                }
            },
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/product.js');
                }],
                simpleObj: function ($http) {
                    return $http({
                        method:'GET',
                        url:'/tourisms/list'
                    }).then(function(resp){
                        return resp.data;
                    },function(resp){
                    });
                }
            }
        })
        .state('tourismForm', {
            url: 'tourism/form?id',
            views: {
                "lazyLoadView": {
                    controller: 'tourismFormCtrl',
                    templateUrl: '/view/tourismForm.html'
                }
            },
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
        })

        /****************
         **  bus路由    **
         *****************/
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
                        url:'/bus/list'
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
        // busno
        .state('busno', {
            url: '/busno',
            views: {
                "lazyLoadView": {
                    controller: 'busnoCtrl', // This view will use AppCtrl loaded below in the resolve
                    templateUrl: '/view/busno.html'
                }
            },
            resolve: {
                loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('/javascripts/controllers/bus.js');
                }],
                simpleObj: function ($stateParams,$http) {
                    return $http({
                        method:'GET',
                        url:'/busno/list'
                    }).then(function(resp){
                        return resp.data;
                    },function(resp){
                    });
                }
            },
        })
        .state('busnoForm', {
            url: 'busno/form?id',
            templateUrl: '/view/busnoForm.html',
            controller: 'busnoFormCtrl',
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
});
