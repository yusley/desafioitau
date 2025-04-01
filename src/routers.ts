import { Router, Request, Response } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200)
})

router.get("/trasaction", (req: Request, res: Response) => {
  res.status(200)
})

export default router
