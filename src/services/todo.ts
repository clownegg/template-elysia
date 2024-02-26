import { Prisma } from "@/libs/prisma";
import { TodoParams, TodoSearchParams } from "@/models/todo";
import * as todoRepository from "@/repositories/todo";

export const findAll = async (prisma: Prisma, cond: TodoSearchParams) => {
	return await todoRepository.findAll(prisma, cond);
};

export const findOne = async (prisma: Prisma,  id: number, cond: TodoParams) => {
  return await todoRepository.findOne(prisma, id, cond)
};
