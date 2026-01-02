import { PrismaService } from "./../services/prisma.service";
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        customerName: string;
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
            product: import("@prisma/client/runtime").GetResult<{
                id: string;
                title: string;
                description: string;
                price: import("@prisma/client/runtime").Decimal;
                image: string;
            }, unknown> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: string;
            quantity: number;
            note: string | null;
            price: import("@prisma/client/runtime").Decimal;
            orderId: string;
            productId: string;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: string;
        customerName: string;
        email: string;
        address: string;
        createdAt: Date;
    }, unknown> & {}>;
    findAll(): Promise<({
        items: ({
            product: import("@prisma/client/runtime").GetResult<{
                id: string;
                title: string;
                description: string;
                price: import("@prisma/client/runtime").Decimal;
                image: string;
            }, unknown> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: string;
            quantity: number;
            note: string | null;
            price: import("@prisma/client/runtime").Decimal;
            orderId: string;
            productId: string;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: string;
        customerName: string;
        email: string;
        address: string;
        createdAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<{
        items: ({
            product: import("@prisma/client/runtime").GetResult<{
                id: string;
                title: string;
                description: string;
                price: import("@prisma/client/runtime").Decimal;
                image: string;
            }, unknown> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: string;
            quantity: number;
            note: string | null;
            price: import("@prisma/client/runtime").Decimal;
            orderId: string;
            productId: string;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: string;
        customerName: string;
        email: string;
        address: string;
        createdAt: Date;
    }, unknown> & {}>;
}
