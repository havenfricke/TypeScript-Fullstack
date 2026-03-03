import express, { Application, Request, Response } from 'express';
import indexRoutes from './routes/index';
import dotenv from "dotenv";

// .env setup
dotenv.config();

const app: Application = express();
const PORT = process.env.LISTEN_PORT; 

// Middleware for parsing JSON
app.use(express.json());

// Register modular routes
app.use('/', indexRoutes);

// 404 Fallback Route
app.use((req: Request, res: Response) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});