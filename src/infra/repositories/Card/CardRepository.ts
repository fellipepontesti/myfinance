import { Card } from "../../../domain/models/Card";
import { ICardRepository } from "../../../domain/repositories/Card/ICardRepository";
import { ConnectionDB } from "../../db/connection";

export default class CardRepository implements ICardRepository {
  async save (card: Card): Promise<Card> {
    try {
      return ConnectionDB.manager.save(card)
    } catch (error: any) {
      throw new Error(error)
    }
  }
}