import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookMarkModule } from './book-mark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { BookMark } from './bookmark/bookmark.entity';
import { ConfigModule } from '@nestjs/config';
import { BookmarkController } from './bookmark/bookmark.controller';
import { BookmarkService } from './bookmark/bookmark.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookMarkModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: '123',
      database: 'nest',
      entities: [User, BookMark],
      synchronize: true,
    }),
  ],
  controllers: [BookmarkController],
  providers: [User, BookmarkService],
})
export class AppModule {}
