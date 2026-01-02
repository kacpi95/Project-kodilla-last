import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { PrismaService } from './services/prisma.service';
import { ProductsModule } from './product/products.module';

@Module({
  imports: [OrdersModule, ProductsModule],
  providers: [PrismaService],
})
export class AppModule {}
