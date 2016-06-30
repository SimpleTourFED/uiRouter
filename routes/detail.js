/**
 * Created by ashbringer on 16/6/16.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/products/detail/:id',function(req,res,next){
    var file = './public/data/productList.json';
    fs.exists(file,function (exists) {
        if(exists){
            var productObj = JSON.parse(fs.readFileSync(file));
            var result;
            for(var i = 0;i<productObj.length;i++){
                if(productObj[i].id == req.params.id){
                    result = productObj[i];
                }
            }
            return res.json(result);
        }else{
            return res.json([]);
        }
    });
});
router.get('/tourisms/detail/:id',function(req,res,next){
    var file = './public/data/tourismList.json';
    fs.exists(file,function (exists) {
        if(exists){
            var productObj = JSON.parse(fs.readFileSync(file));
            var result;
            for(var i = 0;i<productObj.length;i++){
                if(productObj[i].id == req.params.id){
                    result = productObj[i];
                }
            }
            return res.json(result);
        }else{
            return res.json([]);
        }
    });
});
router.get('/bus/detail/:id',function(req,res,next){
    var file = './public/data/bus.json';
    fs.exists(file,function (exists) {
        if(exists){
            var productObj = JSON.parse(fs.readFileSync(file));
            var result;
            for(var i = 0;i<productObj.length;i++){
                if(productObj[i].id == req.params.id){
                    result = productObj[i];
                }
            }
            return res.json(result);
        }else{
            return res.json([]);
        }
    });
});
router.get('/busno/detail/:id',function(req,res,next){
    var file = './public/data/busno.json';
    fs.exists(file,function (exists) {
        if(exists){
            var productObj = JSON.parse(fs.readFileSync(file));
            var result;
            for(var i = 0;i<productObj.length;i++){
                if(productObj[i].id == req.params.id){
                    result = productObj[i];
                }
            }
            return res.json(result);
        }else{
            return res.json([]);
        }
    });
});
router.post('/tourism/add',function(req,res,next){
    var data = req.body,file = './public/data/tourismList.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            data.id = tourismObj.length+1;
            tourismObj.push(data);
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{
            data.id = 1;
            fs.appendFile(file,JSON.stringify([data]),function () {
                return res.json('success');
            })
        }
    })
});
router.post('/bus/add',function(req,res,next){
    var data = req.body,file = './public/data/bus.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            data.id = tourismObj.length+1;
            tourismObj.push(data);
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{
            data.id = 1;
            fs.appendFile(file,JSON.stringify([data]),function () {
                return res.json('success');
            })
        }
    })
});
router.post('/busno/add',function(req,res,next){
    var data = req.body,file = './public/data/busno.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            data.id = tourismObj.length+1;
            tourismObj.push(data);
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{
            data.id = 1;
            fs.appendFile(file,JSON.stringify([data]),function () {
                return res.json('success');
            })
        }
    })
});
router.post('/product/add',function(req,res,next){
    var data = req.body,file = './public/data/productList.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            data.id = tourismObj.length+1;
            tourismObj.push(data);
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{
            data.id = 1;
            fs.appendFile(file,JSON.stringify([data]),function () {
                return res.json('success');
            })
        }
    })
});
router.post('/product/edit',function(req,res,next){
    var data = req.body,file = './public/data/productList.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            for(var i = 0,len = tourismObj.length;len < i; i++) {
                if(data.id == tourismObj[i].id) {
                    tourismObj[i].name =  data.name;
                }
            }
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{
            data.id = 1;
            fs.appendFile(file,JSON.stringify([data]),function () {
                return res.json('success');
            })
        }
    })
});
router.post('/product/edit',function(req,res,next){
    var data = req.body,file = './public/data/tourismList.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            for(var i = 0,len = tourismObj.length;len < i; i++) {
                if(data.id == tourismObj[i].id) {
                    tourismObj[i].name =  data.name;
                }
            }
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{

        }
    })
});
router.post('/bus/edit',function(req,res,next){
    var data = req.body,file = './public/data/bus.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            for(var i = 0,len = tourismObj.length;len < i; i++) {
                if(data.id == tourismObj[i].id) {
                    tourismObj[i].name =  data.name;
                }
            }
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{
            data.id = 1;
            fs.appendFile(file,JSON.stringify([data]),function () {
                return res.json('success');
            })
        }
    })
});
router.post('/busno/edit',function(req,res,next){
    var data = req.body,file = './public/data/busno.json';
    fs.exists(file,function (exists) {
        if(exists){
            var tourismObj = JSON.parse(fs.readFileSync(file));
            for(var i = 0,len = tourismObj.length;len < i; i++) {
                if(data.id == tourismObj[i].id) {
                    tourismObj[i].name =  data.name;
                }
            }
            fs.writeFile(file,JSON.stringify(tourismObj),function () {
                return res.json('success');
            })
        }else{
            data.id = 1;
            fs.appendFile(file,JSON.stringify([data]),function () {
                return res.json('success');
            })
        }
    })
});
module.exports = router;