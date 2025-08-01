import cors from "cors"
import Express from "express"
import helmet from "helmet"
import morgan from "morgan"

const app = Express()

app.use(morgan("combined"))
app.use(helmet)
app.use(cors)
app.use(Express.json())

export default app
