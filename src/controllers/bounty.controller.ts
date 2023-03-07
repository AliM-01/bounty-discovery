import { getBounties, Question } from '../services/bounty.service';
import { Get, Query, Tags, Route, Controller } from 'tsoa';

@Route("bounty")
@Tags("Bounty")
export class BountyController extends Controller {
    @Get("/")
    public async getBounties(@Query() take?: number): Promise<Question[]> {
        const bounties = await getBounties(take ?? 0);

        return bounties
    }
}