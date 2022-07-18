import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('system.jwt.secret'),
    });
  }

  async validate(payload: unknown) {
    console.log(payload);
    if (payload && payload['id']) {
      return payload;
    }

    throw new UnauthorizedException(
      'Não autorizado! Verifique suas credenciais.',
    );
  }
}
