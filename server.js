var http = require('http');
var fs = require('fs');
var qr = require('querystring');
var repos = require('./data');
var _ = require('lodash');

var handler = function(request, response) {
  console.log(request.url, 'url');
  if (request.url === '/') {
    response.writeHeader(200, { 'Content-Type': 'text/html' });

    fs.readFile(__dirname + '/index.html', (error, file) => {
      response.end(file);
    });
  } else if (request.url === '/home') {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write('Hello from Home!');
    response.end();
  } else if (request.url === '/users') {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(JSON.stringify(repos));
    response.end();
  } else if (request.url === '/create-post') {
    var allData = '';
    request.on('data', chuncks => {
      allData += chuncks;
    });

    request.on('end', chuncks => {
      console.log(qr.parse(allData), 'all data');
      response.writeHeader(200, { 'Content-Type': 'text/html' });
      response.write('Thanks for posting!!');
      response.end();
    });
  } else {
    response.writeHeader(404, { 'Content-Type': 'text/html' });
    response.write('<h1> Error 404!</h1>');
    response.end();
  }
};
var server = http.createServer(handler);

var port = 4000;
server.listen(port, () => {
  console.log(`I'm listening to port ${port}`);
});
