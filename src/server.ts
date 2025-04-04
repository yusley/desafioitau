import express from "express"
import { json } from "express"
import Routers from "./routers"

const router = new Routers().router

const app = express()

const port = "3333"

app.use(json())

app.use(router)

app.listen(port, () => {
  console.log("Server runing in port ", port)
})
