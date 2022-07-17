import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/common/decorators/user.decorator';
import { JwtGuard } from 'src/modules/auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookMarkDto } from './dto';

@ApiTags('Bookmark')
@UseGuards(JwtGuard)
@ApiBearerAuth('token')
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookMarkService: BookmarkService) {}

  @Get()
  getBookMarks(@AuthUser('id') userId: string) {
    return this.bookMarkService.getBookMarks(userId);
  }

  @Post()
  createBookMark(
    @AuthUser('id') userId: string,
    @Body() dto: CreateBookMarkDto,
  ) {
    return this.bookMarkService.createBookMark(userId, dto);
  }

  @Get(':id')
  getBookMarksById(
    @AuthUser('id') userId: string,
    @Param('id') bookMarkId: string,
  ) {
    return this.bookMarkService.getBookMarksById(bookMarkId);
  }
}
