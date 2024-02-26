import { findTodo, searchTodo } from "@/dao/todo";
import { Prisma } from "@/libs/prisma";
import { TodoParams, TodoSearchParams } from "@/models/todo";

export const findAll = async (prisma: Prisma, cond: TodoSearchParams) => {
	try {
		return await searchTodo(prisma, cond);
	} catch {
		return {
			todos: [],
			count: 0,
		};
	}
};

export const findOne = async (prisma: Prisma, id: number, cond: TodoParams) => {
		return await findTodo(prisma, id, cond)
};
