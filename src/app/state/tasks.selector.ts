import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.state';

const selectTasks = createFeatureSelector<TaskState>('tasks');

//ALL TASKS FOR TASK LIST VIEW
export const getTasks = createSelector(
  selectTasks,
  state => state.tasks
);

//TASK STATE FOR EDIT PAGE
export const getCurrentTask = createSelector(
  selectTasks,
  state => state.currentTask
)

//VALUE FOR SORT SELECT
export const getCurrentSort = createSelector(
  selectTasks,
  state => state.sort
)