import express, { Application, Request, Response } from 'express';
import getBounties from './bounty.service';

const app: Application = express();

app.use(express.json());

// GET /bounties
// GET /bounties?take=10
app.get("/bounties", async (req: Request, res: Response) => {
    const take = req.query.take !== undefined ? Number(req.query.take) : 25;

    const bounties = await getBounties(take);
    const jsonData = JSON.stringify(bounties, null, '\t');

    res.status(200).json(jsonData);
});

app.listen(8080, () => {
    console.log("Running on http://localhost:8080");
})