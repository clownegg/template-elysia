import { prisma } from "@/libs/prisma";
import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { routeInit } from "./routes";

new Elysia()
	.onResponse(({ request, set }) => {
		console.log(`[${request.method}]: ${set.status} ${request.url}`);
	})
	.use(cors())
	.state("prisma", prisma)
	.use(routeInit)
	.listen(8080);
