import { DeleteTransactionController } from '../controllers/transacoes/DeleteTransactionController'
import { PrismaDataBaseClient } from '../prisma'
import { DeleteTransactionService } from '../services/DeleteTransactionService'

export function deleteTransactionFactory() {
  const prisma = new PrismaDataBaseClient()
  const service = new DeleteTransactionService(prisma)
  const controller = new DeleteTransactionController(service)
  return controller
}
