const moduleA = require('../../01_moduleA');
console.log(moduleA.welcome);

const c = require('./folderC');
console.log(c.hi);

const http = require('http');
http
  .createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
  })
  .listen(8080);
