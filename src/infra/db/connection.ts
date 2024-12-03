import { DataSource } from "typeorm"
import { Expense } from "../../domain/models/Expense"
import { Card } from "../../domain/models/Card"
import { Installment } from "../../domain/models/Installment"
import { User } from "../../domain/models/User"
import { Wallet } from "../../domain/models/Wallet"

export const ConnectionDB = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "myfinance",
  synchronize: true,
  logging: true,
  entities: [Expense, Card, Installment, User, Wallet],
  subscribers: [],
  migrations: [],
})