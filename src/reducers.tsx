import userAuth from "./actions/userAuth";

interface ActionType {
  type: string;
  loggedInUser: string;
}

const authentication = (
  state = {
    loggedInUser: null
  },
  action: ActionType
) => {
  switch (action.type) {
    case userAuth.LOG_IN:
      return { ...state, loggedInUser: action.loggedInUser };
    case userAuth.LOG_OUT:
      return { loggedInUser: null, authKey: null, url: null };
    default:
      return state;
  }
};

export const reducers = {
  authentication
};
