import { Wallet } from "../../models/Wallet";

export interface IWalletRepository {
  save: (wallet: Wallet) => Promise<Wallet>
  getById: (id: number) => Promise<Wallet | null>
}