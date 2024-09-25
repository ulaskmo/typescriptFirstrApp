import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import userRoutes from './routes/users'; // Import the user routes

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(morgan("tiny")); // Keep the morgan middleware

// Tell the app to use the userRoutes
app.use('/api/v1/users', userRoutes); 

app.get("/ping", async (_req: Request, res: Response) => {
    res.send({
        message: "hello from helllllo",
    });
});

app.get('/bananas', async (_req: Request, res: Response) => {
    res.send('hello world, this is bananas');
});

app.listen(PORT, () => {
    console.log("Server is running on port --", PORT);
});
