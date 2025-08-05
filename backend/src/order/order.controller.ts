import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Клиент создаёт заказ
  @Post()
  async createOrder(@Req() req, @Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(req.user.id, dto);
  }

  // Получить свои заказы (для клиента)
  @Get('my')
  async getMyOrders(@Req() req) {
    return this.orderService.getMyOrders(req.user.id);
  }

  // Получить заказы на свои тренировки (для коуча)
  @Get('coach')
  async getOrdersForCoach(@Req() req) {
    return this.orderService.getOrdersForCoach(req.user.id);
  }

  // Обновить статус заказа (только коуч)
  @Put(':id/status')
  async updateOrderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Req() req,
    @Body() dto: UpdateOrderStatusDto,
  ) {
    return this.orderService.updateOrderStatus(id, req.user.id, dto.status);
  }
}
