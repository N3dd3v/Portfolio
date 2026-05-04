import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';
import myCors from './middleware/myCors.mjs'

const app = express();

app.use(cors());
app.use(myCors('http://localhost:5173'));

app.use(express.json());

app.listen(5000)