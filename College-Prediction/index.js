// Importing the Express module
import express from 'express';
import studentRouter from './NodeJs-Code/routes/studentRoutes.js';
import collegeRouter from './NodeJs-Code/routes/collegeRoutes.js';


// Creating an instance of the Express application
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("Hello Student..!")
})

server.use('/api/student', studentRouter)
server.use('/api/college', collegeRouter)

export default server;