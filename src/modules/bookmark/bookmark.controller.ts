import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/modules/auth/decorator';
import { JwtGuard } from 'src/modules/auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookMarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookMarkService: BookmarkService) {}

  @Get()
  getBookMarks(@GetUser('id') userId: string) {
    return this.bookMarkService.getBookMarks(userId);
  }

  @Post()
  createBookMark(
    @GetUser('id') userId: string,
    @Body() dto: CreateBookMarkDto,
  ) {
    return this.bookMarkService.createBookMark(userId, dto);
  }

  @Get(':id')
  getBookMarksById(
    @GetUser('id') userId: string,
    @Param('id') bookMarkId: string,
  ) {
    return this.bookMarkService.getBookMarksById(bookMarkId);
  }
}
