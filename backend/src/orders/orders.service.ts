import { PrismaService } from "./../services/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrdersService {
	constructor(private prisma: PrismaService) {}

	async create(data: {
		customName: string;
		email: string;
		address: string;
		items: {
			productId: string;
			quantity: number;
			price: number;
			note?: string;
		}[];
	}) {
		return this.prisma.order.create({
			data: {
				customerName: data.customName,
				email: data.email,
				address: data.address,
				items: {
					create: data.items.map((item) => ({
						quantity: item.quantity,
						price: item.price,
						note: item.note,
						product: {
							connect: { id: item.productId },
						},
					})),
				},
			},
			include: {
				items: {
					include: {
						product: true,
					},
				},
			},
		});
	}

	async findAll() {
		return this.prisma.order.findMany({
			include: {
				items: {
					include: {
						product: true,
					},
				},
			},
		});
	}

	async findOne(id: string) {
		return this.prisma.order.findUnique({
			where: { id },
			include: {
				items: {
					include: {
						product: true,
					},
				},
			},
		});
	}
}
