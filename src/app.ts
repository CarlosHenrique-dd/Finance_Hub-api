import cors from "cors"
import Express from "express"
import helmet from "helmet"
import morgan from "morgan"
import userRouter from "./modules/user/routes/userRouter"
import errorHandler from "./shared/middlewares/errorHandler"

const app = Express()

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(Express.json())

app.use("/user", userRouter)

app.use(errorHandler)

export default app
