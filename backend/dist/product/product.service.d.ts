import { PrismaService } from 'src/services/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, data: UpdateProductDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
