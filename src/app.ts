import cors from "cors"
import Express from "express"
import helmet from "helmet"
import morgan from "morgan"
import userRouter from "./modules/user/routes/userRouter"
import errorMiddleware from "./shared/middlewares/errorMiddleware"

const app = Express()

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(Express.json())

app.use("/user", userRouter)

app.use(errorMiddleware)

export default app
