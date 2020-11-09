const http = require('http')

const server = http.createServer((request, response)=>{
	// response.write('This is my first request')
	// response.end()
	console.log(`Someone has requested ${request.url}`)

	if(request.url === '/'){
		response.write('Hello, this is a request')
		response.end()
	}else{
		response.statusCode = 404
		response.write(`404 Page`)
		response.end()
	}
})
server.listen(3000)