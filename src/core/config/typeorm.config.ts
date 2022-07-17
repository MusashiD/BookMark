import { BookMark } from '../../modules/bookmark/bookmark.entity';
import { User } from '../../modules/user/user.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'test',
  entities: [User, BookMark],
  synchronize: true,
};
