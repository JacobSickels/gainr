import * as React from "react";

import { IGoal } from "../../../src/common/types/goals";

// import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
// tslint:disable-next-line:import-name
import ImageIcon from "@material-ui/icons/Image";

interface GoalProps {
  goal: IGoal;
  key: number;
}

// const styles = theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   }
// });

export const GOAL = (props: GoalProps) => (
  //  const { classes } = props;
  <div
    style={{ width: "25%", margin: "0 auto" }}
    // className={classes.root}
  >
    <List>
      <ListItem>
        <Avatar>
          {/* TODO: Switch this icon based on props.categories */}
          <ImageIcon />
        </Avatar>
        <ListItemText
          primary={props.goal.name}
          secondary={props.goal.duration.allottedTime}
        />
      </ListItem>
    </List>
  </div>
);

export default GOAL;
