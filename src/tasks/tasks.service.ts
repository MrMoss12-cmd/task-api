import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTaskInput } from './dto/create-task.input';

const prisma = new PrismaClient();

@Injectable()
export class TasksService {
    async getAllTasks() {
        return prisma.task.findMany();
    }

    async createTask(data: CreateTaskInput) {
        return prisma.task.create({ data });
    }
}
