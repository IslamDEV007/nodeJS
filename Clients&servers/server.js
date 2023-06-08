const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("request made")
});

server.listen(3000, "localhost", ()=>{
    console.log("listening for requests on port 3000")
})

// Localhost is like a domain name on the web

//It has a specific IP address (127.0.0.1) which is directly linked to our own computer

//Port numbers are like "doors" into a computer