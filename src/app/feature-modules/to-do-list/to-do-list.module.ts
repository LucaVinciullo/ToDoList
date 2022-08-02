import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ToDoListRoutingModule} from './to-do-list-routing.module';
import {ToDoListContainer} from './containers/to-do-list-container.component.ts/to-do-list-container.component.ts.component';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ToDoListService} from './services/to-do-list.service';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    MatTabsModule,
    HttpClientModule
  ],
  declarations: [
    ToDoListContainer,
    TaskCardComponent,
    TaskListComponent
  ],
  providers: [
    HttpClient,
    ToDoListService
  ]
})

export class ToDoListModule { }
