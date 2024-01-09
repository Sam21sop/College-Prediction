import dotenv from 'dotenv';
dotenv.config(); 

// import server instance from index module
import server from "./College-Prediction/index.js";

const PORT = process.env.PORT | 8080;

// Server is listening on 8080
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});