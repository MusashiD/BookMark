import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BookMark {
  @PrimaryGeneratedColumn()
  id:string;

  @Column()
  title: string;

  @Column({nullable:true})
  description?:string;

  @Column()
  link:string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}