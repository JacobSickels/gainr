import { IGoal } from "../../src/common/types/goals";

export const testingGoal: IGoal = {
  term: "short",
  name: "Read 15 minutes",
  frequency: {
    calendarBasis: "weekly",
    amount: 3,
    defaultTimeOfDay: null
  },
  duration: {
    allottedTime: 900 // seconds
  },
  categories: []
};

export const testingGoal2: IGoal = {
  term: "long",
  name: "Bike 30 mins",
  frequency: {
    calendarBasis: "monthly",
    amount: 5,
    defaultTimeOfDay: null
  },
  duration: {
    allottedTime: 1800 // seconds
  },
  categories: ["fitness", "health"]
};

export const testingGoal3: IGoal = {
  term: "short",
  name: "Eat eggs for breakfast",
  frequency: {
    calendarBasis: "daily",
    amount: 1,
    defaultTimeOfDay: null
  },
  duration: {
    allottedTime: 300 // seconds
  },
  categories: ["social", "personalGrowth"]
};

export const goalList: IGoal[] = [testingGoal, testingGoal2, testingGoal3];
