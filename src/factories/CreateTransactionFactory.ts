import { CreateTransactionController } from '../controllers/transacoes/CreateTransactionController'
import { CreateTransactionService } from '../services/CreateTransactionService'
import { ValidTransaction } from '../utils/validTransaction'
import { PrismaDataBaseClient } from '../prisma'

export function createTransactionFactory(): CreateTransactionController {
  const prisma = new PrismaDataBaseClient()
  const service = new CreateTransactionService(prisma)
  const validTransaction = new ValidTransaction()
  const controller = new CreateTransactionController(service, validTransaction)
  return controller
}
