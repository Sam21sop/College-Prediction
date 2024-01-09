import express from 'express'

const server = express();

server.get('/', (req, res)=> {
    res.send("Welcome to college prediction")
});

server.listen(8080, ()=>{
    console.log("server listen on 8080...");
})