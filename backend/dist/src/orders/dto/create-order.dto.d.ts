export declare class CreateOrderItemDto {
    productId: number;
    quantity: number;
    note?: string;
    price: number;
}
export declare class CreateOrderDto {
    customerName: string;
    email: string;
    address: string;
    items: CreateOrderItemDto[];
}
