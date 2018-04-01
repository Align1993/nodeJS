let url = require('url');
let adr = "https://127.0.0.1:8088/views/index.html?user=aaa&pass=123#d";
console.log(url.parse(adr));
console.log(url.format(adr));
console.log(url.resolve('http://', 'www.baidu.com'));

// https
// auth = user + pass
// url
// host  = hostname + port
// hostname >> servername
// pathname 
// search > query
// #hash  > 锚点

// path

// POSIX:
// root  /
// dir  home/user/dir
// file  name 
// .txt   .ext

// windows:
// dir root C:\  path\dir  \file  .txt






