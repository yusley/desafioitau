import { PrismaDataBaseClient } from '../prisma'
import { EstatisticaTransactionService } from '../services/EstatisticaTransactionService'
import { EstatisticaTransactionController } from '../controllers/transacoes/EstatisticaTransactionController'

export function estatisticaTransactionFactory(): EstatisticaTransactionController {
  const prisma = new PrismaDataBaseClient()
  const service = new EstatisticaTransactionService(prisma)
  const controller = new EstatisticaTransactionController(service)
  return controller
}
