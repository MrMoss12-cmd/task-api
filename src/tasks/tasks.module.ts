import { Module } from '@nestjs/common';
import { TaskResolver } from './tasks.resolver'
import { TasksService } from './tasks.service';

@Module({
  providers: [TaskResolver, TasksService],
})
export class TasksModule {}
