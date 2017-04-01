var express = require('express');
var app = express();

// 设置跨域访问，方便开发
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});







app.post("", function(req, res) {
    res.send({
        "result": 1,
        "msg": "保存成功"
    })
})







var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Mock server listening at http://%s:%s', host, port);
});
