import { Router } from "express"
import { validateMiddleware } from "@/shared/middlewares/validationMiddleware"
import { createUserSchema } from "../dtos/createUserRequest"
import makeCreateUser from "../factories/makeCreateUser"

const userRouter = Router()

userRouter.post("/", validateMiddleware(createUserSchema), (req, res) =>
	makeCreateUser().handler(req, res)
)

export default userRouter
