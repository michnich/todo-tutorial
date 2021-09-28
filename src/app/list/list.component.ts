import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task } from '../task';
import { TaskService } from './../task.service';

import { TaskState } from './../state/task.state';
import { deleteAllTasks, setSort, loadTasks, setCurrentTask} from './../state/task.actions';
import { getCurrentSort, getTasks } from './../state/tasks.selector';

import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  sort = 'created'

  tasksInStore$!: Observable<Task[]>;
  tasks:Task[] = [];

  constructor(private store: Store<TaskState>, private router : Router, private service: TaskService) {}

  ngOnInit(): void {
    this.store.pipe(select(getTasks)).subscribe(state => {
      this.tasks = state.slice();
    })

    this.store.pipe(select(getCurrentSort)).subscribe(state => {
      this.sort = state;
    })
  }

  // EDIT TASK BUTTON
  editTask(task: Task) {
    this.store.dispatch(setCurrentTask({currentTask: task}));
    this.router.navigate(['/edit', task.id]);
  }

  // DELETE TASK
  deleteTask(id: string) {
    this.service.deleteTask(id);
  }

  // TOGGLE TASK COMPLETE
  completeTask(task: Task) {
    const clone = {...task};
    this.service.toggleComplete(clone);
  }

  // UPDATE STORE VALUE IN STATE
  updateSortState() {
    this.store.dispatch(setSort({currentSort : this.sort}))
  }

  // DELETE ALL TASKS
  deleteAll() {
    this.store.dispatch(deleteAllTasks());
  }
}
