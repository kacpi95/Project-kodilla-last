import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    create(body: CreateProductDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        detailedDescription: string | null;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        detailedDescription: string | null;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<{
        images: (import("@prisma/client/runtime").GetResult<{
            id: string;
            url: string;
            productId: string;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        detailedDescription: string | null;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, body: UpdateProductDto): {
        success: boolean;
    };
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        description: string;
        detailedDescription: string | null;
        price: import("@prisma/client/runtime").Decimal;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
