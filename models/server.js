
import express from 'express';
import cors from 'cors';
import dbConection from '../database/config.js';

class server {
    constructor() {
        this.port = process.env.PORT
        this.app = express();
        this.dbConection();
        this.middlewares();
        this.routes();
    }

    routes(){

    }

    async dbConection(){
        await dbConection()
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.long( 'servidor corriendo en el puerto  $[this.port]');
        
        })
    }


}

export {server}