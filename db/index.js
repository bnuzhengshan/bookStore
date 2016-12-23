var mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1/bookstore');//创建并连接mongoDB的bookstore数据库
var BookSchema = new mongoose.Schema({
    bookName:String,
    bookCover:String,
    bookPrice:Number,
    currency:String
},{collection:'books'});
exports.Book = mongoose.model('Book',BookSchema);//将数据库BookSchema挂到exports的Book属性上