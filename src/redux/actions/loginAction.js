import { LOGIN_USER } from "../actionTypes";
export const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
});
