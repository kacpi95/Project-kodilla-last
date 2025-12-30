import { Module } from "@nestjs/common";
import { OrdersModule } from "./orders/orders.module";
import { PrismaService } from "./services/prisma.service";

@Module({
	imports: [OrdersModule],
	providers: [PrismaService],
})
export class AppModule {}
