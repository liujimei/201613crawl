var Movie=require('../model').movie;
var async=require('async');
var debug=require('debug')('crawl:write');
exports.move=function (movies,callback) {
    async.forEach(movies,function (item,cb) {
        Movie.create(item,cb)
    },callback)
    
};