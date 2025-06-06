// src/data-source.ts
import { DataSource } from 'typeorm';
import { Task } from './tasks/entities/task.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'user',
  database: 'my_db',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

export default dataSource;
