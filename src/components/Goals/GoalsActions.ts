// import firebase, { auth } from "./firebase";
import { IGoal } from "../../common/types/goals";
import { createAction } from "typesafe-actions";

export const createGoal = createAction(
  "CREATE_GOAL",
  resolve => (goal: IGoal) => resolve({ goal })
);

// ###### TO DO #######
// async stuff located at https://www.npmjs.com/package/typesafe-actions#--the-async-flow
// const fetchTodos = createAsyncAction(
//   'FETCH_TODOS_REQUEST',
//   'FETCH_TODOS_SUCCESS',
//   'FETCH_TODOS_FAILURE'
// )<void, Todo[], Error>();

// const fetchTodosFlow: Epic<RootAction, RootState, Services> = (action$, store, { todosApi }) =>
//   action$.pipe(
//     filter(isActionOf(fetchTodos.request)),
//     switchMap(action =>
//       from(todosApi.getAll(...)).pipe(
//         map(fetchTodos.success),
//         catchError(pipe(fetchTodos.failure, of))
//       )
//     );
