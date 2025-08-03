import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BalanceService } from './balance.service';

@Controller('balance')
@UseGuards(JwtAuthGuard)
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  getMyBalance(@Req() req) {
    return this.balanceService.getUserBalance(req.user.id);
  }

  @Post('add')
  addToBalance(
    @Req() req,
    @Body() body: { trainingId: number; quantity: number },
  ) {
    return this.balanceService.addToBalance(
      req.user.id,
      body.trainingId,
      body.quantity,
    );
  }

  @Post('deduct')
  deductFromBalance(
    @Req() req,
    @Body() body: { trainingId: number; quantity: number },
  ) {
    return this.balanceService.deductFromBalance(
      req.user.id,
      body.trainingId,
      body.quantity,
    );
  }
}
