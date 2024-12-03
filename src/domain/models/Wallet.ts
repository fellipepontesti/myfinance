import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import BaseModel, { numeric } from "./BaseModel"

@Entity('carteiras')
export class Wallet extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'bigint', transformer: [numeric], unique: true })
  user_id: number

  @Column({ name: 'value_cents' })
  valueCents: number

  @Column({ name: 'saved_value_cents' })
  savedValue: number
}