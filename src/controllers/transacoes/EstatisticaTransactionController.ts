import { InterfaceEstatisticaTransactionService } from 'services/EstatisticaTransactionService'
import { Response, Request } from 'express'

class EstatisticaTransactionController {
  constructor(private service: InterfaceEstatisticaTransactionService) {}
  async handle(req: Request, res: Response) {
    try {
      const estatisticaService = await this.service.execute()
      res.status(200).send(estatisticaService)
    } catch {
      res.status(402).send()
    }
  }
}

export { EstatisticaTransactionController }
