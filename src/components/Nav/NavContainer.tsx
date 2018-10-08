import * as React from "react";
// tslint:disable-next-line:import-name
// Avatar Dropdown Menu
// end Avatar Dropdown Menu
import "./Nav.css";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { userLoggingIn, userLoggingOut } from "../../actions/userAuth";
import { NAV } from "./Nav";

export interface NavProps {
  firebaseUser?: firebase.UserInfo;
  userLoggingIn: (user: firebase.UserInfo) => any;
  userLoggingOut: () => null;

  // dispatch?: (action: any) => void;
}

// add in the typescript/inline className declarations and remove the CSS file/import??

interface LocalNavState {
  anchorEl: null | HTMLElement;
}

interface NavState {
  authentication: {
    firebaseUser?: firebase.UserInfo;
  };
}

class NavContainer extends React.Component<NavProps> {
  state: LocalNavState = {
    anchorEl: null
  };

  handleMenuClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <NAV
        anchorEl={anchorEl}
        handleMenuClick={this.handleMenuClick}
        handleMenuClose={this.handleMenuClose}
        userLoggingIn={this.props.userLoggingIn}
        userLoggingOut={this.props.userLoggingOut}
        firebaseUser={this.props.firebaseUser}
      />
    );
  }
}

const mapStateToProps = (state: NavState) => {
  return {
    firebaseUser: state.authentication.firebaseUser
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    userLoggingIn: (user: firebase.UserInfo) => {
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
)(NavContainer);

export default CONNECTED_NAV;
