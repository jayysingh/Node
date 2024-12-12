const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(
            `<h1> Hello From Jay</h1>
            <h2>This is home Page</h2>
            <h2> this is testing of nodemon<h2>
            `
        )
    }
})

server.listen(3300,()=>{
    console.log("server is running");
})
