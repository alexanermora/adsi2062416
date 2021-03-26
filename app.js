
import {} from 'dotenv/config.js';
import { server } from './models/server.js';

const server = new server();

server.listen();