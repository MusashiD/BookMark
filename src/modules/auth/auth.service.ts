import {
  ForbiddenException,
  HttpCode,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/modules/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async validateLogin({ email, password }: AuthDto) {
    const user = await this.usersRepository.findOne({
      where: { email: email },
    });

    if (!user) {
      throw new UnauthorizedException('Credentials incorrect');
    }

    const pwMatches = await argon.verify(user.password, password);

    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return {
      id: user.id,
      email: user.email,
    };
  }

  async signUp(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const CreateUser = this.usersRepository.create({
      email: dto.email,
      password: hash,
    });
    const user = await this.usersRepository.save(CreateUser);
    return { message: ' I have sign up', user };

    /*
    const createMovie = await this.repository.create({ name,id,release_date,rent_id,duration,category})
    const movie = await this.repository.save(createMovie);*/
  }

  @HttpCode(HttpStatus.OK)
  async signIn(dto: User) {
    return this.signToken(dto);
  }

  async signToken({ id, email }: any): Promise<{ acess_token: string }> {
    const payload = {
      sub: id,
      id,
      email,
    };
    const token = this.jwt.sign(payload);
    return {
      acess_token: token,
    };
  }
}
