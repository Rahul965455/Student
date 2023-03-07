import { ADD_STUDENT, CHECK_IN, CHECK_OUT } from "./actionTypes";

const initialState = {
  students: JSON.parse(localStorage.getItem("students") || "[]"),
  numCheckedIn: 0,
};

const getNumCheckedIn = (students) => {
  return students.reduce((count, student) => {
    if (student.checkIn && !student.checkOut) {
      return count + 1;
    }
    return count;
  }, 0);
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      const newStudent = {
        id: Date.now(),
        rollNo: action.payload.rollNo,
        studentName: action.payload.studentName,
        checkIn: "",
        checkOut: "",
      };
      localStorage.setItem(
        "students",
        JSON.stringify([...state.students, newStudent])
      );
      return {
        ...state,
        students: [...state.students, newStudent],
        numCheckedIn: getNumCheckedIn([...state.students, newStudent]),
      };
    case CHECK_IN:
      const newStudentsCheckIn = state.students.map((student) =>
        student.id === action.payload
          ? { ...student, checkIn: new Date().toLocaleTimeString() }
          : student
      );
      localStorage.setItem("students", JSON.stringify(newStudentsCheckIn));
      return {
        ...state,
        students: newStudentsCheckIn,
        numCheckedIn: getNumCheckedIn(newStudentsCheckIn),
      };
    case CHECK_OUT:
      const newStudentsCheckOut = state.students.map((student) =>
        student.id === action.payload
          ? { ...student, checkOut: new Date().toLocaleTimeString() }
          : student
      );
      localStorage.setItem("students", JSON.stringify(newStudentsCheckOut));
      return {
        ...state,
        students: newStudentsCheckOut,
        numCheckedIn: getNumCheckedIn(newStudentsCheckOut),
      };
    default:
      return state;
  }
};

export default studentReducer;
