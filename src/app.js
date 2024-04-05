import express from 'express';
import bodyParser from 'body-parser';
import loadRoutes from './loaders/routes.js';
import connectDB from './database.js';

connectDB();
const app = express();

app.use(bodyParser.json());
loadRoutes(app);

export default app;
