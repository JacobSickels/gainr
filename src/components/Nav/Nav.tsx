import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// tslint:disable-next-line:import-name
import MenuIcon from "@material-ui/icons/Menu";
import "./Nav.css";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { userLoggingIn, userLoggingOut } from "../../actions/userAuth";

interface NavProps {
  loggedInUser?: string;
  userLoggingIn: (user: string) => string;
  userLoggingOut: () => null;
}

// add in the typescript/inline className declarations and remove the CSS file/import??

class Nav extends React.Component<NavProps> {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="menuButton"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="grow">
              NavBarrrrr
            </Typography>
            {!this.props.loggedInUser ? (
              <Button
                color="inherit"
                onClick={() => this.props.userLoggingIn("John")}
              >
                Login
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => this.props.userLoggingOut()}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

interface NavState {
  authentication: {
    loggedInUser?: string;
  };
}

const mapStateToProps = (state: NavState) => {
  return {
    loggedInUser: state.authentication.loggedInUser
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    userLoggingIn: (user: string) => {
      dispatch(userLoggingIn(user));
    },
    userLoggingOut: () => {
      dispatch(userLoggingOut());
    }
  };
};

const CONNECTED_NAV = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default CONNECTED_NAV;
