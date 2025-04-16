import { CreateTransactionController } from "../controllers/transacoes/CreateTransactionController";
import { CreateTransactionService } from "../services/CreateTransactionService"

export function createTransactionFactory():CreateTransactionController{
    const service = new CreateTransactionService()
    const controller = new CreateTransactionController(service)
    return controller
}