import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { CLIENT_URL } from './config/constants.js';

dotenv.config({"path":"./config/config.env"});

const app=express();
app.use(cors(
    {
        origin: CLIENT_URL,
        credentials: true
    }
));

export default app;