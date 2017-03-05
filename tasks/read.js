var request=require('request');
var cheerio=require('cheerio');
var debug=require('debug')('crawl:read');
exports.movie=function (url,callback) {
    request({url,encoding},function (err,reqponse,body) {
        body=iconv.decode(body,'gbk');
        var $=cheerio.load(body);
        var movies=[];
        $('.keyword .list-titlet').each(function () {
            var $me=$this;
            var movie={
                name:$me.text(),
                url:$me.attr('href')
            };
            debug(`读到电影：${movie.name}`);
            movies.push(movie);
            
            movies.push(movie);
        });
        
        callback(err,movies)
        
    });
    //  exports.movie('http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10',function (err,movie) {
    //     console.log(movie);
    //
    // })
};