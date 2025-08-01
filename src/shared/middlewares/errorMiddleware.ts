import type { ErrorRequestHandler } from "express"
import env from "../env"
import { HttpError } from "../errors/HttpError"

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
	const isHttpError = err instanceof HttpError

	const statusCode = isHttpError ? err.statusCode : 500
	const message = isHttpError ? err.message : "internal server error"

	const responseBody: Record<string, any> = {
		message
	}

	if (env.NODE_ENV === "DEV" && statusCode === 500) {
		responseBody.stack = err.stack
	}

	res.status(statusCode).json(responseBody)
}

export default errorMiddleware
