import { NextFunction, Request, Response } from "express"
import { InterfaceListTransactionService } from "services/ListTransactionsService"

class ListTransactionsController {

  private listTransactionsService : InterfaceListTransactionService

  constructor(listTransactionsService:  InterfaceListTransactionService){
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
