var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201613crawl');
var MoveSchema=new mongoose.Schema({
    name:String,
    url:String
});
exports.Movie=mongoose.model('Movie',MoveSchema);