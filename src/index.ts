import express, { Application, Request, Response } from 'express';
import getBounties from './bounty.service';

const app: Application = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    const bounties = await getBounties();
    const jsonData = JSON.stringify(bounties, null, '\t');
    console.log(jsonData);
    
    res.status(200).json(jsonData);
});

app.listen(8080, () => {
    console.log("Running on http://localhost:8080");
})