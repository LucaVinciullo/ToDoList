import {Component, Input} from '@angular/core';

import {Task} from 'src/app/feature-modules/to-do-list/model/task.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: Task | null = null;
  @Input() users: Record<string, unknown> = {};

  date = new Date();
}
