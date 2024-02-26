import { MergeSchema, UnwrapRoute, t } from "elysia";
import { ElysiaContext, order, pathParameter } from "./common";

export const todoSearchParams = t.Object({
	title: t.Optional(t.String()),
	done: t.Optional(t.Boolean()),
	isDeleted: t.Optional(t.Boolean()),
	sort: t.Optional(t.String({ default: "id" })),
	order,
	limit: t.Optional(t.Number()),
	offset: t.Optional(t.Number()),
});

export type TodoSearchContext = ElysiaContext &
	MergeSchema<
		UnwrapRoute<
			{
				query: typeof todoSearchParams;
			},
			// biome-ignore lint/complexity/noBannedTypes:
			{}
		>,
		// biome-ignore lint/complexity/noBannedTypes:
		{}
	>;

export type TodoSearchParams = TodoSearchContext["query"];

export const todoParam = t.Object({
	isDeleted: t.Optional(t.Boolean()),
});

export type TodoParamContext = ElysiaContext &
	MergeSchema<
		UnwrapRoute<
			{
				params: typeof pathParameter;
				query: typeof todoParam;
			},
			// biome-ignore lint/complexity/noBannedTypes:
			{}
		>,
		// biome-ignore lint/complexity/noBannedTypes:
		{}
	>;

export type TodoParams = TodoParamContext["query"];

export type Todo = {
	id: number;
	title: string;
	done: boolean;
	isDeleted: boolean;
	createdAt: string;
	updatedAt: string;
};
