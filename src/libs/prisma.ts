import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
	log: ["query"]
});

export type Prisma = typeof prisma;
