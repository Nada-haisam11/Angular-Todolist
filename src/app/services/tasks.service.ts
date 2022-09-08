import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks : Task[] = [
    {
      title:"HTML5",
      discription:"Hyper text mark up language"
    }
,
    {
      title:"js",
      discription:"javascript"
    }
  ]

  constructor() { }

  delateTask(i: number){
    this.tasks.splice(i,1);
  }

  saveTask(title :any , discription :any){
    this.tasks.push({
      title,
      discription
    })
  }
}
