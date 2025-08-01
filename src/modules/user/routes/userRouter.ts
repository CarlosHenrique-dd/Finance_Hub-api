import { Router } from "express"
import makeCreateUser from "../factories/makeCreateUser"

const userRouter = Router()

userRouter.post("/", (req, res) => makeCreateUser().handler(req, res))

export default userRouter
