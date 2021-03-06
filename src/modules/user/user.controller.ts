import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/common/decorators/user.decorator';
import { JwtGuard } from 'src/modules/auth/guard';
import { UserService } from './user.service';

@ApiTags('User')
@UseGuards(JwtGuard)
@ApiBearerAuth('token')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  getMe(@AuthUser('id') id: string) {
    return this.userService.findOne(id);
  }
}
