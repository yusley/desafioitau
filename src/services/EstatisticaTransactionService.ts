import { InterfacePrismaDataBaseClient } from 'prisma'
import { EstatisticasTransactions } from '../utils/estatisticas'

interface Estatisticas {
  count: number
  sum: number
  avg: number
  min: number
  max: number
}

export interface InterfaceEstatisticaTransactionService {
  execute(): Promise<Estatisticas>
}

class EstatisticaTransactionService implements InterfaceEstatisticaTransactionService {
  constructor(private prisma: InterfacePrismaDataBaseClient) {}

  async execute() {
    const client = await this.prisma.getClient()
    const now = new Date()
    const findHouerFormat = new Date(now.getTime() - 60 * 1000)
    console.log(findHouerFormat)
    const transactions = await client.transacao.findMany({
      where: {
        dataHora: {
          gte: findHouerFormat,
          lt: now,
        },
      },
    })
    console.log(transactions)
    return new EstatisticasTransactions(transactions).execute()
  }
}

export { EstatisticaTransactionService }
