import { BeforeInsert, BeforeUpdate, Column, PrimaryColumn, ValueTransformer } from 'typeorm'

export const numeric: ValueTransformer = {
  to: (entityValue: number) => entityValue,
  from: (databaseValue: string): number => Number(databaseValue)
}

export function formatDateWithoutTimeZone (date: Date): Date {
  return new Date(date.valueOf() - date.getTimezoneOffset() * 60000)
}

abstract class BaseModel {
  @PrimaryColumn({ type: 'bigint', transformer: [numeric], generated: 'rowid' })
  id: number

  @Column({ name: 'created_at' })
  private _created_at: Date

  @Column({ name: 'updated_at' })
  private _updated_at: Date

  set created_at (value: Date) {
    this._created_at = value
  }

  get created_at (): Date {
    return formatDateWithoutTimeZone(this._created_at)
  }

  set updated_at (value: Date) {
    this._updated_at = value
  }

  get updated_at (): Date {
    return formatDateWithoutTimeZone(this._updated_at)
  }

  getID (): number {
    return this.id
  }

  @BeforeInsert()
  updateDateOnCreation (): void {
    const date = new Date()
    this._created_at = date
    this._updated_at = date
  }

  @BeforeUpdate()
  updateDateOnUpdate (): void {
    this._updated_at = new Date()
  }
}

export default BaseModel
