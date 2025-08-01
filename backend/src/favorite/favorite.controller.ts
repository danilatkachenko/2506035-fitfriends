import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('favorites')
@UseGuards(JwtAuthGuard)
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post(':id')
  async add(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.favoriteService.addToFavorites(req.user, id);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    await this.favoriteService.removeFromFavorites(req.user, id);
    return { message: 'Удалено из избранного' };
  }

  @Get()
  async get(@Req() req) {
    return this.favoriteService.getFavorites(req.user);
  }
}
