import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    if (!this.productsService.findOne(id))
      throw new NotFoundException('Product not found');
    this.productsService.update(id, body);
    return { success: true };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!this.productsService.findOne(id))
      throw new NotFoundException('Product not found');
    this.productsService.remove(id);
    return { success: true };
  }
}
