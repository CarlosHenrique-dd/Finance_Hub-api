import type { Request, Response } from "express"
import type { CreateUserRequest } from "../dtos/createUserRequest"
import type CreateUserService from "../services/CreateUserService"

export default class CreateUserController {
	constructor(private readonly createUserService: CreateUserService) {}

	async handler(req: Request<any, any, CreateUserRequest>, res: Response) {
		const user = req.body
		await this.createUserService.execute(user)
		return res.status(201).send()
	}
}
