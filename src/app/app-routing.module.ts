import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'toDoList',
    loadChildren: () => import('./feature-modules/to-do-list/to-do-list.module').then(m => m.ToDoListModule)
  },
  {
    path: '**',
    redirectTo: '/toDoList'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
