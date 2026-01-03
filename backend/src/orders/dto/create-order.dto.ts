import {
  IsArray,
  IsEmail,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateOrderItemDto {
  @IsString()
  productId!: number;

  @IsString()
  quantity!: number;

  @IsString()
  note?: string;

  @IsNumber()
  price!: number;
}

export class CreateOrderDto {
  @IsString()
  customerName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  address!: string;

  @IsArray()
  @ValidateNested({ each: true })
  items!: CreateOrderItemDto[];
}
