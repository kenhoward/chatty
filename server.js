// domain for my Node app which responds to GET and POST

var http = require('http');
var port = 11000;

http.createServer(function(req, res) {
	if (req.method === 'GET') {
		res.writeHead(11000, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
		res.end(JSON.stringify({message: messages}))
	}
	// With Node, the way you get those chunks of data is to watch for two events on the request object, like so:
    if (req.method == 'POST') {
       var postData = '';
       req.on('data', function(chunk) {
           postData += chunk.toString();
        });    
        req.on('end', function() {
            console.log("Got POST data:");
            console.log(JSON.parse(postData));
            // In the future with Express, this will be much easier.
       })
        // If the request method is POST, add the message to your messages array, retrieving it from the request JSON body (see paragraph above). Make sure you end the response with a status, headers, and a body. Test your server setup using Postman to add a new message via POST (make sure you use a "raw" request of type JSON)
        res.end(JSON.stringify({message: messages})) // <-- look this up in 
    }
}).listen(port);
console.log('listening to ' + port)


var messages = ["testing"]