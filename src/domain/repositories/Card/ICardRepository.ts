import { Card } from "../../models/Card";

export interface ICardRepository {
  save: (card: Card) => Promise<Card>
}