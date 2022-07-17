import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookmarkModule } from './modules/bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';
import { BookMark } from './modules/bookmark/bookmark.entity';
import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import typeormConfig from './core/config/typeorm.config';
import systemConfig from './core/config/system.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [registerAs('typeorm', () => typeormConfig), systemConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
