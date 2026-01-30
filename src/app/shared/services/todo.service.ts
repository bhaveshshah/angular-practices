import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface ITodo {
  id: number,
  todo: string,
  completed: boolean,
  userId: number
}


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // Modern dependency injection using inject()
  private http: HttpClient = inject(HttpClient);

  getTodos(): Observable<ITodo[]> {
    return this.http.get<{ todos: ITodo[], total: number, skip: number, limit: number }>('https://dummyjson.com/todos')
      .pipe(
        map((res) => res.todos)
      );
  }
}
