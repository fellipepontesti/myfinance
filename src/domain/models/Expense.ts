import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import BaseModel from "./BaseModel"

@Entity('gastos')
export class Expense extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  @Column({name: 'value_cents'})
  valueCents: number

  @Column()
  installments: number

  @Column({ name: 'user_id' })
  userId?: number

  @Column({ name: 'card_id' })
  cardId?: number
}