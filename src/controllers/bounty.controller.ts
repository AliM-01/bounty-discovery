import { getBounties, Question } from '../services/bounty.service';
import { Get, Query, Tags, Route } from "tsoa";
import { Request, Response } from 'express';

// @Route("bounty")
// @Tags("Bounty")
// export default class BountyController {
//     @Get("/")
//     public async getBounties(@Query() take?: number): Promise<Question[]> {
//         return
//     }
// }

export async function getBountiesHandler(req: Request, res: Response) {

    const take = req.query.take !== undefined ? Number(req.query.take) : 25;

    const bounties = await getBounties(take);

    return res.send(bounties);
}