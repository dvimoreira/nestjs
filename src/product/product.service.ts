import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { Product } from './entities/product.entity'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository<Product>,
  ) {}

  async findAll() : Promise<Product[]> {
    try {
      return await this.ProductRepository.find({});
    } catch (e) {
      return e;
    };
  }

  async findOne(id: number): Promise<Product> {
    try {
      return await this.ProductRepository.findOne(id);
    } catch (e) {
      return e;
    };
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new Product();

    Object.keys(createProductDto).forEach((key) => {
      newProduct[key] = createProductDto[key];
    });

    try {
      return await this.ProductRepository.save(newProduct);
    } catch (e) {
      return e;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let getProduct = await this.ProductRepository.findOne(id)

    let updated = Object.assign(getProduct, updateProductDto);
    return await this.ProductRepository.save(updated);
  }

  async remove(id: number) {
    try {
      return await this.ProductRepository.delete(id);
    } catch (e) {
      return e;
    }
  }
}
