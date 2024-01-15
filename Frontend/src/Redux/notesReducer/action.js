import axios from "axios";
import { NOTES_ERROR, NOTES_FETCHING, NOTES_LOADING } from "../actionTypes";

export const getNotes = (token) => (dispatch) => {
  dispatch({ type: NOTES_LOADING });
  axios
    .get("https://puce-frail-oyster.cyclic.app/todo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: NOTES_FETCHING, payload: res.data});
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: NOTES_ERROR });
      // console.log(err);
    });
};

export const createNotes = (newNote) => (dispatch) => {
  return axios.post("https://puce-frail-oyster.cyclic.app/todo/addTodo", newNote, {
    headers: {
      Authorization: `Bearer ${document.cookie?.split("=")[1]}`,
    },
  });
};

export const EditNotes = (id, body, token) => (dispatch) => {
  return axios.patch(`https://puce-frail-oyster.cyclic.app/todo/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const DeleteNotes = (token, id) => () => {
  return axios.delete(`https://puce-frail-oyster.cyclic.app/todo/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
