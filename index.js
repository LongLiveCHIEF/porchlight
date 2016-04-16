var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({port:53773});

server.start(function(err){
	if(err){
		throw new Error("error!");	
	}

	console.log(`server running at ${server.info.uri}`);
});
