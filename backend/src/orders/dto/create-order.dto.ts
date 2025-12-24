export class CreateOrderItemDto {
	productId: number;
	quantity: number;
	note?: string;
	price: number;
}

export class CreateOrderDto {
	customerName: string;
	email: string;
	address: string;
	items: CreateOrderItemDto[];
}
