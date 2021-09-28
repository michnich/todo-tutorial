import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { TaskState } from './task.state';
import {taskReducer} from './task.reducer';

export interface State {
  tasks: TaskState
}

export const reducers: ActionReducerMap<State> = {
  tasks: taskReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
