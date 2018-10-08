import userAuth from "./actions/userAuth";

interface ActionType {
  type: string;
  firebaseUser: string;
}

const authentication = (
  state = {
    firebaseUser: null
  },
  action: ActionType
) => {
  switch (action.type) {
    case userAuth.LOG_IN:
      return { ...state, firebaseUser: action.firebaseUser };
    case userAuth.LOG_OUT:
      return { firebaseUser: null, authKey: null, url: null };
    default:
      return state;
  }
};

export const reducers = {
  authentication
};
