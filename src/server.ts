import app from "./app"
import env from "./shared/env"

const PORT = env.PORT
app.listen(PORT, () => {
	console.info(`Running at port ${PORT}`)
})
