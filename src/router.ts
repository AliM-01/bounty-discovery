import express from "express";
import { getBountiesHandler } from "./controllers/bounty.controller";

const router = express.Router();

router.get("/bounty", getBountiesHandler);

export default router;