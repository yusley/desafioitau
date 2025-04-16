import { CreateTransactionController } from "../src/controllers/transacoes/CreateTransactionController"
import { ListTransactionsController } from "../src/controllers/transacoes/ListTransactionsController"
import { createTransactionFactory } from "../src/factories/CreateTransactionFactory"
import { Router, Request, Response, NextFunction } from "express"
import { listTransactionsFactory } from "../src/factories/ListTransactionsFactory"

class Routers {
  public router: Router
  private listTransactionService : ListTransactionsController  
  private createTransactionController: CreateTransactionController


  constructor() {
    this.router = Router()
    this.listTransactionService = listTransactionsFactory()
    this.createTransactionController = createTransactionFactory()

    this.initializedRouters()
  }

  private initializedRouters() {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).send()
    })

    this.router.get(
      "/transacao",
      (req: Request, res: Response, next: NextFunction) => {
        return this.listTransactionService.handle(req, res, next)
      },
    )

    this.router.post("/transacao", (req: Request, res: Response) => {
      return this.createTransactionController.handle(req, res)
    })
  }
}

export default Routers
