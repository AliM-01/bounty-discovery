import express from "express";
import PingController from "./controllers/bounty";

const router = express.Router();

router.get("/bounty", async (req, res) => {
    const take = req.query.take !== undefined ? Number(req.query.take) : 25;

    const controller = new PingController();

    const bounties = await controller.getBounties(take);
    const jsonData = JSON.stringify(bounties, null, '\t');

    // res.status(200).json(jsonData);

    return res.send(bounties);
});

export default router;