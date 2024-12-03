import { Moviment } from "../../models/Moviment";

export interface IMovimentRepository {
  save: (moviment: Moviment) => Promise<Moviment>
}