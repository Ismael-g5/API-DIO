import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import  createConnection  from './database';

createConnection();
const server = express();

server.use(express.json())
server.use(router);

server.listen(3201,() => {
    console.log('servidor rodando na porta 3201 http://localhost:3201/');

})