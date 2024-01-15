import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from "../actionTypes";

export const login = (user) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  return axios.post("https://puce-frail-oyster.cyclic.app/user/login", user);
};

export const logout = (token) => (dispatch) => {
  // return axios.post("https://puce-frail-oyster.cyclic.app/user/logout", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  dispatch({ type: LOGOUT });
};
