import * as React from "react";
import { IGoal } from "../../../src/common/types/goals";
import Goal from "./Goal";

interface GoalsContainerProps {
  goals: IGoal[];
}

class GoalsContainer extends React.Component<GoalsContainerProps> {
  render() {
    return (
      <div style={{ width: "100%" }}>
        {this.props.goals.map((goal, idx) => (
          <Goal key={idx} goal={goal} />
        ))}
      </div>
    );
  }
}

export default GoalsContainer;
