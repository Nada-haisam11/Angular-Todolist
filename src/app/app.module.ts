import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componant/home/home.component';
import { AddTaskComponent } from './componant/add-task/add-task.component';
import { NotFoundComponent } from './componant/not-found/not-found.component';
import { TaskContainComponent } from './componant/task-contain/task-contain.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    NotFoundComponent,
    TaskContainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
