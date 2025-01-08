import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import {fileURLToPath} from 'url';
import duaRoute from './routes/dua.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const dbpath = path.join(__dirname,'config','dua_main.sqlite');
export const db = new sqlite3.Database(dbpath);
app.use('/api/v1',duaRoute)
app.get('/',(req,res)=>{
    res.send(
        "<h1> Hello world</h1>"
    );
})


export default app;