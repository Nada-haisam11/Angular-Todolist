import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-contain',
  templateUrl: './task-contain.component.html',
  styleUrls: ['./task-contain.component.css']
})
export class TaskContainComponent implements OnInit {

  taskid:any;
  task:any;
   
  constructor(private route:ActivatedRoute , private TasksService:TasksService) { }

  ngOnInit(): void {
    this.taskid = this.route.snapshot.paramMap.get('id');
    this.task = this.TasksService.tasks[this.taskid]
  }

}
