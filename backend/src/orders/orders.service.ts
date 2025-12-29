import { Injectable } from "@nestjs/common";
import { PrismaService } from "../services/prisma.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Injectable()
export class OrdersService {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateOrderDto) {
		return this.prisma.order.create({
			data: {
				customName: data.customerName,
				email: data.email,
				address: data.address,
				order_items: {
					create: data.items.map((item) => ({
						quanity: item.quantity,
						note: item.note,
						price: item.price,
						product_id: item.productId,
					})),
				},
			},
			include: {
				order_items: true,
			},
		});
	}
}
