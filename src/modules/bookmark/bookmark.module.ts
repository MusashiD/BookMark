import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkController } from './bookmark.controller';
import { BookMark } from './bookmark.entity';
import { BookmarkService } from './bookmark.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookMark])],
  providers: [BookmarkService],
  exports: [TypeOrmModule],
  controllers: [BookmarkController],
})
export class BookmarkModule {}
