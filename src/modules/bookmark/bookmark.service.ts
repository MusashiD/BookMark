import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookMark } from './bookmark.entity';
import { CreateBookMarkDto, EditBookMarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(BookMark)
    private bookmarkRepository: Repository<BookMark>,
  ) {}

  getBookMarks(userId: string): Promise<BookMark[]> {
    return this.bookmarkRepository.find({ where: { userId } });
  }

  async createBookMark(userId: string, dto: CreateBookMarkDto) {
    const CreateBookMark = this.bookmarkRepository.create({ userId, ...dto });
    const bookMark = await this.bookmarkRepository.save(CreateBookMark);

    return bookMark;
  }

  getBookMarksById(bookmarkId: string) {
    return this.bookmarkRepository.findOneBy({ id: bookmarkId });
  }

  async updateBookMarksById(bookmarkId: string, dto: EditBookMarkDto) {
    const bookMark = this.bookmarkRepository.findOneBy({ id: bookmarkId });
    if (!bookMark) {
      throw new UnauthorizedException('Credentials incorrect');
    }
    await this.bookmarkRepository.update(bookmarkId, dto);
  }
}
