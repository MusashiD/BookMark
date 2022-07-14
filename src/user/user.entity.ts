import { Exclude } from "class-transformer";
import { AuthDto } from "src/auth/dto";
import { BookMark } from "src/book-mark/bookmark.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:string;

  @Column({unique:true})
  email:string;

  @Column()
  password:string;

  @Column({nullable: true})
  name?: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @OneToMany(() => BookMark, (bookMark) => bookMark.user)
    bookMark: BookMark[]
}