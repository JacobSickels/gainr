import { IGoal } from "../../common/types/goals";
// import { Action, ActionCreator, Dispatch } from "redux";
import * as goalsActions from "./GoalsActions";
import { ActionType, getType } from "typesafe-actions";

export type GoalAction = ActionType<typeof goalsActions>;

export interface IGoalsState {
  goals: IGoal[] | [];
}

export const goals = (
  state: IGoalsState = {
    goals: []
  },
  action: GoalAction
) => {
  switch (action.type) {
    case getType(goalsActions.createGoal):
      return {
        ...state,
        goals: [...state.goals, action.payload.goal]
      };

    default:
      return state;
  }
};
