import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import BaseModel from "./BaseModel"

export enum EnumTransactionType {
  INCOME = 0,
  EXPENSE = 1
}

@Entity('movimentacoes')
export class Moviment extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'enum', enum: EnumTransactionType })
  type: EnumTransactionType

  @Column({ name: 'balance_cents' })
  balanceCents: number

  @Column({ name: 'wallet_id'})
  walletId: number

  @Column()
  description: string
}