# HTTP Server

Creating a web server with node is a common use case and is built in to the `http` standard module.

Using the `createServer` method, we will tell the server to listen to incoming HTTP requests on a specific port. The [port  number](https://en.wikipedia.org/wiki/Port_(computer_networking)) needs to be above 1023 to run without elevated (sudo) permissions. Executing the `listen` function keeps the Node.js program from exiting and will continue running until an error occurs.

Finally, adding an event listener callback for the ["request" event](https://nodejs.org/api/http.html#http_event_request) allows us to execute code based on each request.

Inside this callback, we will receive two arguments. A [request object](https://nodejs.org/api/http.html#http_class_http_incomingmessage) and a [response object](https://nodejs.org/api/http.html#http_class_http_serverresponse) respectively. Most of the time you will see these referred to as `req` and `res` in the callback function. In the following example, we will log the requested url and respond with "OK" using the `end` method for each incoming request.

The most important thing to gather from the docs for those two objects is that they are **streams**. The request object works very much like a Readable Stream and the response object works like a Writeable Stream.

```js
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    console.log('Request received for:', req.url)
    res.end('OK')
})
server.listen(8080)
```

Next, start the server and then open your browser to http://localhost:8080

```bash
$ node server.js
Request received for: /
Request received for: /favicon.ico
```

Next, change the argument passed to the `end` function to something that looks like
HTML: `res.end('<h1>Hello World</h1>')`. Then, stop and restart the server and
refresh your browser.

Your browser should show the rendered HTML that you send from Node.

## Further reading
[Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
