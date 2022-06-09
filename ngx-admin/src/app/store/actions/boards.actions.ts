import {createAction, props} from "@ngrx/store";

export const createTask = createAction(
  '[Board Page] Create Task',
  props<{ task: Omit<Task, 'id' | 'files'> }>()
);


