import express from 'express';
import * as dotenv from 'dotenv';
import connect from './config/db.config.js';
//rotas
import albumRoute from './routes/album.router.js';
import purchaseRote from './routes/purchase.router.js';
//
const app = express();
// -- gitHub
// https://github.com/andersontoma92WDPTOCT2022/w7d5-LAB-CRUD-express-mongoose
//

dotenv.config();
connect();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!

app.use('/album', albumRoute);
app.use('/purchase', purchaseRote);
//

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
