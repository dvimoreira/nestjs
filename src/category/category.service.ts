import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { Category } from './entities/category.entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private CategoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    try {
      return await this.CategoryRepository.find({});
    } catch (e) {
      return e;
    };
  }

  async findOne(id: number): Promise<Category> {
    try {
      return await this.CategoryRepository.findOne(id);
    } catch (e) {
      return e;
    };
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = new Category();

    Object.keys(createCategoryDto).forEach((key) => {
      newCategory[key] = createCategoryDto[key];
    });

    try {
      return await this.CategoryRepository.save(newCategory);
    } catch (e) {
      return e;
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    let getCategory = await this.CategoryRepository.findOne(id)

    let updated = Object.assign(getCategory, updateCategoryDto);
    return await this.CategoryRepository.save(updated);
  }

  async remove(id: number) {
    try {
      return await this.CategoryRepository.delete(id);
    } catch (e) {
      return e;
    }
  }
}
