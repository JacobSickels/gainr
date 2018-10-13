import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Typography from "@material-ui/core/Typography";

type NavTitleProps = RouteComponentProps;

const getPathSuffix = (pathname: string): string =>
  // get suffix of current route (e.g. "Graphs" of /Dashboard/Graphs)
  // first we get the first letter so we can capitalize it
  pathname
    .substring(pathname.lastIndexOf("/") + 1, pathname.length)
    .charAt(0)
    .toUpperCase()
    // then add on the rest of the uncapitalized letters
    .concat(
      pathname
        .substring(pathname.lastIndexOf("/") + 1, pathname.length)
        .slice(1)
    );

class NavTitle extends React.Component<NavTitleProps> {
  render() {
    return (
      <Typography
        style={{ textAlign: "center" }}
        variant="title"
        color="inherit"
        className="grow"
      >
        {getPathSuffix(this.props.location.pathname)}
      </Typography>
    );
  }
}

const connectedNavTitleWithRouter = withRouter(NavTitle);

export default connectedNavTitleWithRouter;
