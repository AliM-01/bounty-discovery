import { getBounties, Question } from '../utils/bounty.service';
import { Get, Query,Tags, Route } from "tsoa";

@Route("bounty")
@Tags("Bounty")
export default class BountyController {
    @Get("/")
    public async getBounties(@Query() take?: number): Promise<Question[]> {
        return await getBounties(take ?? 0);
    }
}