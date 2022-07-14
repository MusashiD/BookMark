import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BookMark } from "./bookmark.entity";

@Injectable()
export class BookMarkService{
  constructor(
    @InjectRepository(BookMark)
    private bookMarkRepository: Repository<BookMark>,
  ){}
  
  findAll(): Promise<BookMark[]> {
    return this.bookMarkRepository.find();
  }

  findOne(id: string): Promise<BookMark> {
    return this.bookMarkRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.bookMarkRepository.delete(id);
  }

  
}