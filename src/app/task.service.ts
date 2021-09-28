import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Task } from './task';
import * as TaskActions from './state/task.actions';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private store: Store) { }

  addTask(title: string, date: Date) {
    let task:Task = {
      title: title,
      completed: false,
      createdAt:  new Date(),
      date: date,
      id: this.generateId()
    }
    this.store.dispatch(TaskActions.addTask({task: task}));
  }

  editTask(task: Task) {
    this.store.dispatch(TaskActions.editTask({task: task}));
  }

  //generates a random string for id, 10 integers long (because no backend)
  generateId(): string {
    let result = '';
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  deleteTask(id: string) {
    this.store.dispatch(TaskActions.deleteTask({taskId: id}));
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
    this.store.dispatch(TaskActions.editTask({task: task}));
  }
}
