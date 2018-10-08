enum userAuth {
  LOG_IN = "USER_LOGGED_IN",
  LOG_OUT = "USER_LOGGED_OUT"
}

export const userLoggingIn = (firebaseUser: firebase.UserInfo) => ({
  firebaseUser,
  type: userAuth.LOG_IN
});

export const userLoggingOut = () => ({
  type: userAuth.LOG_OUT
});

export default userAuth;
