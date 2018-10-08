import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
// tslint:disable-next-line:import-name
import MenuIcon from "@material-ui/icons/Menu";
import { auth, provider } from "../../firebase";
import { NavProps } from "./NavContainer";

interface ExternalProps {
  anchorEl: null | HTMLElement;
  handleMenuClick: (event: any) => void;
  handleMenuClose: () => void;
  userLoggingIn: (user: firebase.UserInfo) => any;
  userLoggingOut: () => void;
}

export const NAV = (props: ExternalProps & NavProps) => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className="grow">
            NavBarrrrr
          </Typography>
          {props.firebaseUser ? (
            <>
              <Avatar
                onClick={props.handleMenuClick}
                alt="User Avatar"
                src={
                  props.firebaseUser.photoURL ? props.firebaseUser.photoURL : ""
                }
                style={{ cursor: "pointer" }}
              />
              <Menu
                id="simple-menu"
                anchorEl={props.anchorEl}
                open={Boolean(props.anchorEl)}
                onClose={props.handleMenuClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem
                  onClick={() => {
                    auth.signOut();
                    props.userLoggingOut();
                    props.handleMenuClose();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={async () => {
                const firebaseUser = await auth.signInWithPopup(provider); // login with firebase
                props.userLoggingIn(firebaseUser.user as firebase.UserInfo);
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
