const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req; // Get the URL of the request

    // Set the response header for HTML content
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        // Handle the root URL
        res.statusCode = 200;
        res.end('<h1>Hello World</h1>');
    } else if (url === '/pizza') {
        // Handle the "/pizza" URL
        res.statusCode = 200;
        res.end('<h1>This is your pizza</h1>');
    } else if (url === '/home') {
        // Handle the "/home" URL
        res.statusCode = 200;
        res.end('<h1>Welcome home</h1>');
    } else if (url === '/about') {
        // Handle the "/about" URL
        res.statusCode = 200;
        res.end('<h1>Welcome to About Us</h1>');
    } else if (url === '/node') {
        // Handle the "/node" URL
        res.statusCode = 200;
        res.end('<h1>Welcome to my Node Js project</h1>');
    } else {
        // Handle all other URLs
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1>');
    }
});

// Start the server on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running `);
});
