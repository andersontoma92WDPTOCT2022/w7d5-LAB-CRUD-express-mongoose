import express from 'express';
import * as dotenv from 'dotenv';
import connect from './config/db.config.js';
const app = express();
// -- gitHub
// https://github.com/andersontoma92WDPTOCT2022/w7d5-LAB-CRUD-express-mongoose
//

dotenv.config();
connect();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
