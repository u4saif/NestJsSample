export interface TaskModel {
  id:string;
  title:string;
  status:TASK_STATUS
}

export enum TASK_STATUS {

  START = 'Started',
  PENDING = 'TASK Is Pendding',
  COMPLETED = ' TASK Completed'
}