import { ADD_STUDENT, CHECK_IN, CHECK_OUT } from "./actionTypes";

export const checkIn = (id) => ({
  type: CHECK_IN,
  payload: id,
});

export const checkOut = (id) => ({
  type: CHECK_OUT,
  payload: id,
});

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});
