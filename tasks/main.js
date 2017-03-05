var read=require('./read').movie;
var write=require('./write').move;
var async=require('async');
var debug=require('debug')('crawl:main');
var  url='http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c1';

var Movie=require('../model').Movie;
// 在保存数据之前先清空数据
async.waterfall([
    function (callback) {
        Movie.remove({},callback);
    },

    function (callback) {
        read(url,callback);
    },function (movies,callback) {
        write(movies,callback)
    }

],function (err,result) {
    debug ('全部任务执行完毕')
});