import { registerAs } from '@nestjs/config';

export default registerAs('system', () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
    expires: `${process.env.JWT_EXPIRES}d`,
  },
  app: {
    port: process.env.PORT,
  },
}));
