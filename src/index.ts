import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    res.status(200).json("Hello world");
});

app.listen(8080, () => {
    console.log("Running on http://localhost:8080");
})