let fs = require('fs');
let path = require('path');
// fs.readFile('/nodeTest/defineModules/myModule.js', function(err, data) {  // file read
//     if(!err) {
//         console.log(data.toString());
//     } else {
//         console.log(err);
//     }
//     console.log('step1');
// })

// console.log(fs.readFileSync('/nodeTest/defineModules/myModule.js').toString()+'step2');

// fs.appendFile('/nodeTest/defineModules/myModule.js', 'hahaha', function(err) { // write in file
//     if(!err) {
//         console.log('no matter');
//     }
// })

// fs.appendFileSync('/nodeTest/defineModules/myModule.js', 'hahahasync');

// fs.open(file, rule, callback)

// fs.open('/nodeTest/defineModules/myModule.js', 'r+', function(err, file) {
//     if(!err) {
//         // fs.readFile(file, function(err, data) {
//         //     console.log(data.toString())
//         // })
//         fs.appendFile(file,'ddd', function(err) {
//            if(!err) {
//                console.log('no matter');
//            }
//         })
//     }
// })

// file edit & file delete
// fs.rename('/nodeTest/defineModules/testReName.js','/nodeTest/defineModules/testRename.js', function(err) {
//     if(!err) {
//         console.log('success')
//     }
// })

// fs.unlink('/nodeTest/defineModules/testRename.js', function(err) {
//     if(!err) {
//         console.log('success')
//     }
// })

// check file & create file

// fs.open('test1.js', 'w', function(err) {
//     if(!err) {
//       console.log('w 不存在就新建')
//     }
// })

// readfile & res.write  read html

// var _html = '';
// fs.readFile('/nodeTest/index.html', function(err, data) {
//     if(!err) {
//         _html = data.toString();
//     }
// })
// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write(_html);
//     res.end();
// }).listen(3000);

// fs read directory information

fs.stat('/nodeJS', function(err, data) {
    console.log(data)
})

// readdir

fs.readdir( __dirname, function(err, data) {
   // console.log( path.join(__dirname + '/urlModule.js'))
   console.log(data);
});