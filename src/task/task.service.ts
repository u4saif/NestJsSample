import { Injectable } from '@nestjs/common';
import { TASK_STATUS, TaskModel } from './task.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TaskService {
  private taskData = [
    {
      id: '65554fd5-d808-4a1e-8c3d-2c6ea9ac29a3',
      title: 'sample1',
      status: 'Started',
    },
    {
      id: 'b984fa4f-c31b-46c0-8cb1-f84d798a5b0a',
      title: 'sample2',
      status: 'Started',
    },
    {
      id: 'c19240f8-3477-4d80-b4d5-c6f876f7bd2b',
      title: 'sample',
      status: 'Started',
    },
    {
      id: '367f09a9-6df0-404b-a922-26e1ec456497',
      title: 'sample',
      status: 'Started',
    },
  ];

  getAllTasks() {
    return this.taskData;
  }

  createTask() {
    const newTask = {
      id: uuid(),
      title: 'sample',
      status: TASK_STATUS.START,
    };
    return this.taskData;
  }
}
