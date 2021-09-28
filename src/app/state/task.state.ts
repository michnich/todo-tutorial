import { Task } from '../task';

export interface TaskState {
  tasks: Task[];
  currentTask?: Task;
  sort: string;
}

export const initialState: TaskState = {
  tasks: [
    {
      title: 'Grocery shopping',
      date: new Date(2021, 8, 27),
      createdAt: new Date(2021, 9, 25),
      completed: false,
      id: "0123456789"
    },
    {
      title: 'Wash Car',
      date: new Date(2021, 8, 29),
      createdAt: new Date(2021, 9, 26),
      completed: false,
      id: "9876543210"
    },
  ],
  sort: 'created'
};
