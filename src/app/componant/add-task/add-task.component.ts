import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor( private tasksService:  TasksService , private router : Router) { }

  ngOnInit(): void {
  }

  saveTask(title:any,description:any){
    this.tasksService.saveTask(title.value,description.value);
    this.router.navigate(['/']);
  }
  
  
}
