import { TodoSearchParams } from "@/models/todo";

export const newTodoSearchParam = (query: TodoSearchParams) => {
	const cond: TodoSearchParams = {
		title: query.title,
		done: query.done,
		isDeleted: query.isDeleted,
		sort: query.sort,
		limit: query.limit || 30,
		offset: query.offset || 0,
		order: query.order,
	};
	return cond;
};
