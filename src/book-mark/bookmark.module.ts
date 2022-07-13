import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookMark } from './bookmark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookMark])],

})
export class BookMarkModule {

}
