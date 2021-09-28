import { Action, createAction, props } from '@ngrx/store';
import { Task } from '../task';

export const loadTasks = createAction(
  '[TASK] Load'
);

export const setSort = createAction(
  '[TASK] Set Task Sort',
  props<{ currentSort: string }>()
);

export const addTask = createAction(
  '[TASK] Add Task',
  props<{task: Task}>()
);

export const editTask = createAction(
  '[TASK] Update Task',
  props<{ task: Task }>()
);

//used for edit
export const setCurrentTask = createAction(
  '[TASK] Set Current Task',
  props<{ currentTask: Task }>()
);

export const deleteTask = createAction(
  '[TASK] Delete Task',
  props<{ taskId: string }>()
);

export const deleteAllTasks = createAction(
  '[TASK] Delete All Task',
);
