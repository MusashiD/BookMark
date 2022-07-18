import { BookMark } from '../../modules/bookmark/bookmark.entity';
import { User } from '../../modules/user/user.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'nest',
  entities: [User, BookMark],
  synchronize: true,
};
