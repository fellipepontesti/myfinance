import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import BaseModel, { numeric } from "./BaseModel"

@Entity('parcelas')
export class Installment extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'bigint', transformer: [numeric], name: 'expense_id' })
  expenseId: number

  @Column({ name: 'value_cents' })
  valueCents: number

  @Column({ name: 'installment_number'})
  installmentNumber: number

  @Column({ name: 'charge_data' })
  chargeData: Date
}