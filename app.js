let express = require('express');
let path = require('path'); //用于指定静态文件中间件
let bodyParser = require('body-parser');//请求解析中间件
let Book = require('./db').Book;
let app = express();//生成一个express实例

app.use(express.static(path.resolve('node_modules')));//指定静态文件根目录
app.use(express.static(path.resolve('views')));//指定静态文件目录，返回首页的html
app.use(bodyParser.urlencoded({extended:true}));//处理请求体格式为查询字符串的请求体
app.use(bodyParser.json());
app.get('/',function (req, res) {
    res.render('index');
});
app.get('/books',function (req, res) {
    Book.find({},function (err, docs) {
        console.log(docs)
        res.send(docs);
    });
});
app.post('/books',function (req, res) {
    var bookObj = req.body;
    console.log(bookObj)
    Book.create(bookObj,function (err, doc) {
        res.send(doc)
    });
})
app.listen(8080);