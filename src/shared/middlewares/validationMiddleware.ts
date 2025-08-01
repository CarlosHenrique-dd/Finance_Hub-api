import type { NextFunction, Request, Response } from "express"
import { ZodError, type z } from "zod"

export function validateMiddleware(schema: z.ZodObject<any>) {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse(req.body)
			return next()
		} catch (error) {
			if (error instanceof ZodError) {
				const errorMessages = error.issues.map((issue) => ({
					path: issue.path.join("."),
					message: issue.message
				}))

				return res
					.status(400)
					.json({ error: "Invalid data", details: errorMessages })
			} else {
				return res.status(500).json({ error: "Internal Server Error" })
			}
		}
	}
}
