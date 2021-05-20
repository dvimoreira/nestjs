import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private StockRepository: Repository<Stock>,
  ) {}

  async findAll() : Promise<Stock[]> {
    try {
      return await this.StockRepository.find({});
    } catch (e) {
      return e;
    };
  }

  async findOne(id: number): Promise<Stock> {
    try {
      return await this.StockRepository.findOne(id);
    } catch (e) {
      return e;
    };
  }

  async create(createStockDto: CreateStockDto): Promise<Stock> {
    const newStock = new Stock();

    Object.keys(createStockDto).forEach((key) => {
      newStock[key] = createStockDto[key];
    });

    try {
      return await this.StockRepository.save(newStock);
    } catch (e) {
      return e;
    }
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    let getStock = await this.StockRepository.findOne(id)

    let updated = Object.assign(getStock, updateStockDto);
    return await this.StockRepository.save(updated);
  }

  async remove(id: number) {
    try {
      return await this.StockRepository.delete(id);
    } catch (e) {
      return e;
    }
  }
}
