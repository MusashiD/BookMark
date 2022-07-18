import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/common/decorators/user.decorator';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { LocalGuard } from './guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signUp(dto);
  }

  @Post('signin')
  @UseGuards(LocalGuard)
  signIn(@Body() dto: AuthDto, @AuthUser() user: User) {
    return this.authService.signIn(user);
  }
}
