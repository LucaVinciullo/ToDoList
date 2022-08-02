import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject, catchError, first, map, Observable, of, Subscription} from 'rxjs';
import {Task} from '../model/task.interface';

@Injectable()
export class ToDoListService {

  private tasksSubject$ = new BehaviorSubject<Task[] | null>(null);
  tasks$ = this.tasksSubject$.asObservable();

  tasksCompleted$: Observable<Task[] | null> = this.tasks$.pipe(map(tasks =>
    tasks?.filter(task => task?.completed) || null
  ));

  tasksPending$ = this.tasks$.pipe(map(tasks =>
    tasks?.filter(task => !task?.completed) || null
  ));



  constructor(private http: HttpClient) {
  }

  getTasks(): void {
    this.tasksSubject$.next(null);
    this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      first(),
      catchError(err => {
        // TODO
        console.error(err);
        return of(err);
      })
    ).subscribe(todos => {
      this.tasksSubject$.next(todos);
    });
  }
}
