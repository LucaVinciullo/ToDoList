import {Component, OnInit} from '@angular/core';
import {ToDoListService} from '../../services/to-do-list.service';

@Component({
  selector: 'app-to-do-list-container.component.ts',
  templateUrl: './to-do-list-container.component.ts.component.html',
  styleUrls: ['./to-do-list-container.component.ts.component.scss']
})
export class ToDoListContainer {

  tasks$ = this.service.tasks$;
  tasksCompleted$ = this.service.tasksCompleted$;
  tasksPending$ = this.service.tasksPending$;

  constructor(private service: ToDoListService) {
    this.service.getTasks();
  }

}
