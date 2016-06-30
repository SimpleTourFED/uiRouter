/**
 * Created by ashbringer on 16/5/31.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/products/list',function(req,res,next){
    var file = './public/data/productList.json';
    fs.exists(file,function (exists) {
        if(exists){
            return res.json(JSON.parse(fs.readFileSync(file)));
        }else{
            return res.json([]);
        }
    });
});
router.get('/tourisms/list',function(req,res,next){
    var file = './public/data/tourismList.json';
    fs.exists(file,function (exists) {
        if(exists){
            return res.json(JSON.parse(fs.readFileSync(file)));
        }else{
            return res.json([]);
        }
    });
});
router.get('/bus/list',function(req,res,next){
    var file = './public/data/bus.json';
    fs.exists(file,function (exists) {
        if(exists){
            return res.json(JSON.parse(fs.readFileSync(file)));
        }else{
            return res.json([]);
        }
    });
});
router.get('/busno/list',function(req,res,next){
    var file = './public/data/busno.json';
    fs.exists(file,function (exists) {
        if(exists){
            return res.json(JSON.parse(fs.readFileSync(file)));
        }else{
            return res.json([]);
        }
    });
});
module.exports = router;
