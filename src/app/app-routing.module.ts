import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './componant/add-task/add-task.component';
import { HomeComponent } from './componant/home/home.component';
import { NotFoundComponent } from './componant/not-found/not-found.component';
import { TaskContainComponent } from './componant/task-contain/task-contain.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'add-task',component:AddTaskComponent},
  { path: 'task-contain', component:TaskContainComponent},
  { path: 'task-contain/:id', component:TaskContainComponent},
  {path: '**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
