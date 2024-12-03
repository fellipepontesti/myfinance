import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import BaseModel from "./BaseModel"

@Entity('usuarios')
export class User extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nickname: string

  @Column({ default: '' })
  token: string

  @Column()
  email: string

  @Column({ name: 'password_encrypted'})
  passwordEncrypted: string
}