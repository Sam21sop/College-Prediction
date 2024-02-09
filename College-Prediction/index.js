// Importing the Express module
import express from 'express';
import studentRouter from './NodeJs-Code/routes/studentRoutes.js';


// Creating an instance of the Express application
const server = express();

server.use(express.json());

server.use('/api/student', studentRouter)

export default server;