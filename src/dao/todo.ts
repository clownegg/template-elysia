import { Prisma as AppPrisma } from "@/libs/prisma";
import { TodoParams, TodoSearchParams } from "@/models/todo";
import { Prisma } from "@prisma/client";

export const searchTodo = async (prisma: AppPrisma, cond: TodoSearchParams) => {
	const sortKey = cond.sort || "id";
	const where: Prisma.TodoWhereInput = {
		title: {
			contains: cond.title,
		},
		done: {
			equals: cond.done,
		},
		is_deleted: {
			equals: cond.isDeleted,
		},
	};

	const [todos, count] = await Promise.all([
		prisma.todo.findMany({
			where,
			skip: cond.offset,
			take: cond.limit,
			orderBy: {
				[sortKey]: cond.order,
			},
		}),
		prisma.todo.count({ where }),
	]);

	return {
		todos,
		count,
	};
};

export const findTodo = async (prisma: AppPrisma, id: number, cond: TodoParams) => {
	const todo = await prisma.todo.findFirstOrThrow({
		where: {
			id: {
				equals: id
			},
			is_deleted: {
				equals: cond.isDeleted,
			},
		},
	});

	return { todo };
};
