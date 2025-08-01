import "dotenv/config"
import z from "zod"

const envSchema = z.object({
	NODE_ENV: z.enum(["DEV", "PROD", "TEST"]),
	PORT: z.coerce.number().min(1).max(65535),
	DATABASE_URL: z.string()
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
	console.error("❌ Erro na validacao das variaveis de ambiente")
	console.error(_env.error.issues)
	if (process.env.NODE_ENV !== "TEST") {
		process.exit(1)
	} else {
		throw new Error("Variáveis de ambiente inválidas para o ambiente de teste.")
	}
}

const env = _env.data

export default env
