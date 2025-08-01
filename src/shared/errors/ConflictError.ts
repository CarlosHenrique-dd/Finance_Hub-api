import { HttpError } from "./HttpError";

class ConflictError extends HttpError {
    constructor(message = "Conflict") {
        super(409, message, "Conflict")
    }
}

export default ConflictError