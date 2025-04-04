import { CreateTransactionService } from "../src/services/CreateTransactionService"
import { CreateTransactionController } from "../src/controllers/transacoes/CreateTransactionController"
import { ListTransactionsController } from "../src/controllers/transacoes/ListTransactionsController"
import { ListTransactionService } from "../src/services/ListTransactionsService"

import { Router, Request, Response, NextFunction } from "express"
class Routers {
  public router: Router
  private listTransactionsController: ListTransactionsController
  private createTransactionController: CreateTransactionController

  constructor() {
    this.router = Router()

    const listTransactionsService = new ListTransactionService()
    const createTransactionService = new CreateTransactionService()

    this.listTransactionsController = new ListTransactionsController(
      listTransactionsService,
    )
    this.createTransactionController = new CreateTransactionController(
      createTransactionService,
    )

    this.initializedRouters()
  }

  private initializedRouters() {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).send()
    })

    this.router.get(
      "/transacao",
      (req: Request, res: Response, next: NextFunction) => {
        return this.listTransactionsController.handle(req, res, next)
      },
    )

    this.router.post("/transacao", (req: Request, res: Response) => {
      return this.createTransactionController.handle(req, res)
    })
  }
}

export default Routers
