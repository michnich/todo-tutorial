import { createReducer, on } from '@ngrx/store';
import { initialState, TaskState } from './task.state';
import * as TaskActions from './task.actions';

export const taskReducer = createReducer<TaskState>(
  initialState,
  // LOAD TASKS
  on(TaskActions.loadTasks, (state): TaskState => {
    return state;
  }),
  // ADD TASK
  on(TaskActions.addTask, (state, action): TaskState => {
    return {
      ...state,
      tasks: [...state.tasks, action.task],
    };
  }),
  // SET CURRENT TASK (FOR EDIT PAGE)
  on(TaskActions.setCurrentTask, (state, action) => {
    return {
      ...state,
      currentTask: action.currentTask,
    };
  }),
  // UPDATE TASK
  on(TaskActions.editTask, (state, action) => {
    //make a copy of the state tasks and update the current task
    const updatedTasks = state.tasks.map((item) =>
      action.task.id === item.id ? action.task : item
    );
    return {
      ...state,
      tasks: updatedTasks,
    };
  }),
  // DELETE TASK
  on (TaskActions.deleteTask, (state, action) => {
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== action.taskId),
    }
  }),
  //SET SORT VALUE
  on (TaskActions.setSort, (state, action) => {
    return {
      ...state,
      sort: action.currentSort
    }
  }),
  // DELETE ALL TASKS
  on (TaskActions.deleteAllTasks, (state) => {
    return {
      ...state,
      tasks : []
    };
  })
);
