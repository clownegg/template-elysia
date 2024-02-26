import { Prisma } from "@/libs/prisma";
import { Context, t } from "elysia";

export type ElysiaContext = Pick<Context, "set" | "store"> & {
	store: {
		prisma: Prisma;
	};
};

export const order = t.Union([t.Literal("asc"), t.Literal("desc")], {
	default: "desc",
});

export const pathParameter = t.Object({
	id: t.Number()
})
