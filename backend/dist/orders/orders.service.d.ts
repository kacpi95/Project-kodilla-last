import { PrismaService } from "./../services/prisma.service";
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        customName: string;
        email: string;
        address: string;
        items: {
            productId: string;
            quantity: number;
            price: number;
            note?: string;
        }[];
    }): Promise<{
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
