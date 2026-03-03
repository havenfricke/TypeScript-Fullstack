import express, { Application, Request, Response } from 'express';
import path from 'path';
import indexRoutes from './routes/index';
import dotenv from "dotenv";

// .env setup
dotenv.config();

const app: Application = express();

// Middleware for parsing JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, '../views')));

// Register routes
app.use('/', indexRoutes);

// 404 Fallback Route
app.use((req: Request, res: Response) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(process.env.LISTEN_PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.LISTEN_PORT}`);
});