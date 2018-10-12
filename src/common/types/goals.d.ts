export type GoalCategories = "fitness" | "health" | "social" | "personalGrowth";

export interface IGoal {
  term: "short" | "long";
  name: string;
  frequency: {
    calendarBasis: "daily" | "weekly" | "monthly" | "yearly";
    amount: number;
    defaultTimeOfDay: typeof Date | null;
  };
  duration: {
    allottedTime: number;
  };
  categories: GoalCategories[] | null;
}
