import { Controller, Get } from "@nestjs/common";
import { TaskModel } from "./task.model";
import { TaskService } from "./task.service";

@Controller("")
export class TaskControler{

  constructor(private taskService: TaskService){}
  // @Get()
  // getTasks(): TaskModel[]{
  //   return this.taskService.getAllTasks();
  // }

   @Get()
  createTask(){
    return this.taskService.createTask();
  }
}