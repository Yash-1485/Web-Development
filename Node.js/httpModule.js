const http=require('http');

const server=http.createServer(function(req,res){
    res.end('Hello World!');
});

// server.listen(3000);

console.log(process.env.PORT);