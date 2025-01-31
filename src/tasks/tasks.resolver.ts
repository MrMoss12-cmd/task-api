import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TasksService } from './tasks.service'
import { Task } from './tasks.model'
import { CreateTaskInput } from './dto/create-task.input'

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TasksService) {}

  @Query(() => [Task])
  async tasks() {
    return this.taskService.getAllTasks();
  }

  @Mutation(() => Task)
  async createTask(@Args('data') data: CreateTaskInput) {
    return this.taskService.createTask(data);
  }
}
