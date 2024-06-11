import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  userId: string;

  @Column({ default: '' })
  username: string;

  @Column()
  userPassword: string;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;
}
