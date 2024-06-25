import { Module } from "@nestjs/common";
import { TaskControler } from "./task.controller";
import { TaskService } from "./task.service";

@Module({
  imports:[],
  controllers:[TaskControler],
  providers:[TaskService]
})

export class TaskModule{}