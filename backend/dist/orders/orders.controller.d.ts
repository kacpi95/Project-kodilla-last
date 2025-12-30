import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(body: any): Promise<{
        items: ({
            product: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                title: string;
                description: string;
                image: string;
            };
        } & {
            id: string;
            quantity: number;
            note: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        customerName: string;
        email: string;
        address: string;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        items: ({
            product: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                title: string;
                description: string;
                image: string;
            };
        } & {
            id: string;
            quantity: number;
            note: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        customerName: string;
        email: string;
        address: string;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        items: ({
            product: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                title: string;
                description: string;
                image: string;
            };
        } & {
            id: string;
            quantity: number;
            note: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            productId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        customerName: string;
        email: string;
        address: string;
        createdAt: Date;
    }>;
}
