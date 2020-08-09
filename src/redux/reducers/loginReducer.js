import { LOGIN_USER } from "../actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("login")) || null,
};

const loginReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case LOGIN_USER:
      localStorage.setItem("login", JSON.stringify(user));
      return { ...state, user: user };

    default:
      return state;
  }
};

export default loginReducer;
