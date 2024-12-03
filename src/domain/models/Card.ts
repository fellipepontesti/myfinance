import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import BaseModel from "./BaseModel"

@Entity('cartoes')
export class Card extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nickname: string

  @Column({ name: 'user_id'})
  userId: number

  @Column()
  color: string

  @Column({ name: 'limit_cents' })
  limitCents: number

  @Column({ name: 'due_day '})
  dueDay: number
}