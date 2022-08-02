import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ToDoListContainer} from './containers/to-do-list-container.component.ts/to-do-list-container.component.ts.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoListContainer
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class ToDoListRoutingModule { }
