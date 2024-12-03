import { Wallet } from "../../../domain/models/Wallet";
import { IWalletRepository } from "../../../domain/repositories/Wallet/IWalletRepository";
import { ConnectionDB } from "../../db/connection";

export default class WalletRepository implements IWalletRepository {
  async save (wallet: Wallet): Promise<Wallet> {
    try {
      return ConnectionDB.manager.save(wallet)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async getById (id: number): Promise<Wallet | null> {
    try {
      return ConnectionDB.manager.findOne(Wallet, { where: { id } })
    } catch (error: any) {
      throw new Error(error)
    }
  }
}