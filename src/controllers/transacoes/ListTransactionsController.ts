import { NextFunction, Request, Response } from "express"
import { ListTransactionService } from "../../services/ListTransactionsService"

class ListTransactionsController {
  private listTransactionsService: ListTransactionService

  constructor(listTransactionsService: ListTransactionService) {
    this.listTransactionsService = listTransactionsService
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const listTransactions = await this.listTransactionsService.execute()
      res.status(200).send(listTransactions)
    } catch (error) {
      next(error)
    }
  }
}

export { ListTransactionsController }
