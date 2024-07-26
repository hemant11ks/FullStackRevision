// Load the HTTP module, which allows us to create an HTTP server
const http = require('http');

// Define the hostname and port number where the server will listen
const hostname = '127.0.0.1'; // localhost
const port = 3000; // Port number

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.statusCode = 200; // As "OK"
  res.setHeader('Content-Type', 'text/plain'); // The content type is plain text

  // Send the response body as "Hello, World!"
  res.end('Hello, World!\n');
});

// The server starts listening on the specified hostname and port
server.listen(port, hostname, () => {
  // Callback function that is called once the server starts listening
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* 
const http = require('http')

    const server = http.createServer(function(req,res){
        res.end("hello Server.....")
   })
server.listen(3000)
*/
