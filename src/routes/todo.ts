import { todoFind, todoFindALl } from "@/handlers/todo";
import { pathParameter } from "@/models/common";
import { todoParam, todoSearchParams } from "@/models/todo";
import { errorResponse, stringToBoolean, stringToNumber } from "@/utils/elysia";
import { GroupElysia } from "./route.types";

export const todoRoute = (app: GroupElysia) => {
	app
		.get("/todos", todoFindALl, {
			transform({ query }) {
				query.done = stringToBoolean(query.done);
				query.isDeleted = stringToBoolean(query.isDeleted);
			},
			query: todoSearchParams,
		})
		.get("/todos/:id", todoFind, {
			transform({ query, params }) {
				params.id = stringToNumber(params.id);
				query.isDeleted = stringToBoolean(query.isDeleted);
			},
			params: pathParameter,
			query: todoParam,
			error({ error, set, code }) {
				return errorResponse(error, code, set);
			},
		})
		.post("/todos", () => "Create Todo")
		.put("/todos/:id", () => "Update Todo")
		.delete("/todos/:id", () => "Delete Todo");

	return app;
};
