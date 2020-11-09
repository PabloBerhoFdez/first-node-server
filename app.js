//---HERE YOU IMPORT OR CALL EXPRESS---//
const express = require('express')
//---HERE YOU CREATE THE SERVER TO HANDLE ALL REQUESTS---//
const app = express()
//---TURNS VISIBLE EVERYTHING INSIDE ON THE 'PUBLIC' FOLDER---//
app.use(express.static('public'))
//---THIS IS THE ROUTE THAT WILL RETURN WHATEVER YOU WANT AFTER A REQUEST SENDED IT TO THE SERVER---//
app.get('/home', (request, response, next)=>{
    console.log(request)
    response.send('This is the second Express request')
})
app.get('/cat', (request, response, next)=>{
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Cat</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Cat</h1>
          <p>This is my second route</p>
          <img src="/images/cool-cat.jpg" />
        </body>
      </html>
    `)
})
// app.get('/images/cool-cat.jpg', (request, response, next)=>{
//     console.log(request)
//     response.send('This is a test with Express')
// })

//---SERVER STARTED---//
app.listen(3000, () => console.log('My first app listening on port 3000!'))