import { PrismaDataBaseClient } from '../prisma'
import { ListTransactionsController } from '../controllers/transacoes/ListTransactionsController'
import { ListTransactionService } from '../services/ListTransactionsService'

export function listTransactionsFactory(): ListTransactionsController {
  const prisma = new PrismaDataBaseClient()
  const service = new ListTransactionService(prisma)
  const controller = new ListTransactionsController(service)
  return controller
}
