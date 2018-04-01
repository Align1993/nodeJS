var http = require('http');
var myModule = require('../defineModules/myModule');
var _html = '<mate charset="utf-8"/>';
_html += '<h1 style="color: red"> hello </h1>';
myModule.foo();
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(_html);
    res.end();
}).listen(3000)
console.log(3000)