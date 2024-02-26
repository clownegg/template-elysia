import { TodoParamContext, TodoSearchContext } from "@/models/todo";
import * as todoService from "@/services/todo";
import { newTodoSearchParam } from "@/vo/todo";

export const todoFindALl = async ({ store, query, set }: TodoSearchContext) => {
	const todoVO = newTodoSearchParam(query);

	const { todos, count } = await todoService.findAll(store.prisma, todoVO);
	set.headers["x-count"] = `${count}`;

	return todos;
};

export const todoFind = async ({ store, query, params }: TodoParamContext) => {
	const { todo } = await todoService.findOne(store.prisma, params.id,  query);
	
	return todo;
};
