// Importing the Express module
import express from 'express';
import path from 'path';


// Creating an instance of the Express application
const server = express();

// set EJS as the view engine
server.set('view engine', 'ejs');

// Specify directory path
const dirPath = path.resolve(path.join('College-Prediction', 'src', 'views'));

// set the directory name
server.set('views', dirPath);

// Define a route
server.get('/', (req, res) => {
    const data = {
        title: "College Prediction",
        // body: "main"
    };

    // render index template
    res.render('index', data);
});



export default server;