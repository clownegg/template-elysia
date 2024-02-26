import { Elysia } from "elysia";
import { todoRoute } from "./todo";

export const routeInit = (app: Elysia) => {
	app.group("/api/v1", (v1) => {
		v1.use(todoRoute);
		return v1;
	});

  return app
};
