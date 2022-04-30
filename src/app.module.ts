import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AuthModule, OrderModule, ProductModule],
})
export class AppModule {}
