import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from "http";
import { Server } from "socket.io";
import { } from 'dotenv/config'

//  App de Express
const app = express();

// Node Server
const httpServer = createServer(app);
const io = new Server(httpServer, {});
import  './sockets/socket.js';

//  Path publico
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));



httpServer.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);
});
export {io};


