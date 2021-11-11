import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 128 })
  title: string
}

export const getById = async (id: number) => {
  return await Blog.findOne(id)
}

export const list = async () => {
  return await Blog.find({})
}