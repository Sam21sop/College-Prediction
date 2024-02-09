import processEnvVar from "./College-Prediction/NodeJs-Code/utils/processEnvVar.js";
import server from "./College-Prediction/index.js";
import connectToDB from "./College-Prediction/NodeJs-Code/config/mongooseConfig.js";


const PORT = processEnvVar.PORT || 8080;
const BASE_URL = processEnvVar.DB_BASE_URL;
const DB_NAME = processEnvVar.DB_NAME;


// Server is listening on 8080
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectToDB(BASE_URL, DB_NAME);
});