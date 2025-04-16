import { ListTransactionsController } from "../controllers/transacoes/ListTransactionsController";
import { ListTransactionService } from "../services/ListTransactionsService";

export function listTransactionsFactory(): ListTransactionsController{
    const service = new ListTransactionService()
    const controller = new ListTransactionsController(service)
    return controller
}
