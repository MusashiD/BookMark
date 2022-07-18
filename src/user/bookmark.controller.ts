import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookMarkDto, EditBookMarkDto } from './dto';

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

  /*@Patch(':id')
  editBookMarksById(@GetUser('id') userId: string,
  @Param('id') bookMarkId: string,
  @Body() dto:EditBookMarkDto){
    return this.bookMarkService.editBookMarksById(userId,dto,bookMarkId)
  }*/

  @Delete(':id')
  deleteBookMarksById(
    @GetUser('id') userId: string,
    @Param('id') bookMarkId: string,
  ) {
    return this.bookMarkService.deleteBookMarksById(userId, bookMarkId);
  }
}
