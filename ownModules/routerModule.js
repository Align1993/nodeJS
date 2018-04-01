let http = require('http');
let url = require('url');
http.createServer(function(req, res) {
    console.log(req.url);
    var _path = url.parse(req.url).pathname;
    switch(_path) {
        case '/':
        res.writeHead(200, {"Content-type": 'text/html'});
        res.write('index');
        res.end();
        break;
        case '/news':
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('news');
        res.end();
        break;
        default:
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('404');
        res.end();
        break;
    }
}).listen(3000)