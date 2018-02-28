# Express

Express is a framework for creating web applications in Node.js. It is considered an unopinionated framework which means it's more like a library or toolset than a structured platform (On the front-end, Angular is an example of an opinionated framework).

A simple express app can be built in just a few lines of code:

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000)
```

Unlike using the Node.js core `http` module, express needs to be installed as a
`node_module`.

```bash
npm install express --save
```
Behind all the nice built-in functionality, an Express application still boils down to http.createServer(...). 
You'll notice some similarities to `createServer`, which we used in the previous exercise.
The same example as above, written with the core `http` module instead of Express:

```js
const { createServer } = require('http')
const app = http.createServer()

app.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.end('Hello World!')
    }
})

app.listen(3000)
```

One noted difference between the two: In the express route handler, it is recommended to use `res.send` rather than
`res.end` if you are sending data. Only use `res.end` to quickly end a response stream without any data. Keep that in mind when we write error handlers for our Express requests.

[res.end](http://expressjs.com/en/api.html#res.end) vs.
[res.send](http://expressjs.com/en/api.html#res.send)