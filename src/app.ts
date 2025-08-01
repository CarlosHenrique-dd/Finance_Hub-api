import cors from "cors"
import Express from "express"
import helmet from "helmet"
import morgan from "morgan"
import errorHandler from "./shared/middlewares/errorHandler"

const app = Express()

app.use(morgan("combined"))
app.use(helmet)
app.use(cors)
app.use(Express.json())

app.use(errorHandler)

export default app
