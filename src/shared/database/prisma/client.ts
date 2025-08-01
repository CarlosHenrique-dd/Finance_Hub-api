import { PrismaClient } from "@prisma/client"
import env from "@/shared/env"

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (env.NODE_ENV !== "PROD") {
	globalForPrisma.prisma = prisma
}
