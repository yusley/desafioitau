import { Response, Request } from 'express'
import { InterfaceDeleteTransactionService } from 'services/DeleteTransactionService'

class DeleteTransactionController {
  constructor(private service: InterfaceDeleteTransactionService) {}

  async handle(req: Request, res: Response) {
    try {
      await this.service.execute()
      res.status(200).send()
    } catch {
      res.status(402).send()
    }
  }
}

export { DeleteTransactionController }
