import {
  REFRESH_LIST_STUDENTS,
  SAVE_ALL_STUDENTS,
  SEARCH_STUDENTS,
} from 'constant/studentAction';

/** lay danh sách học vien */
export const getAllStudent = (listStudent) => {
  return {
    type: SAVE_ALL_STUDENTS,
    payload: listStudent,
  };
};

export const searchStudent = (filter) => {
  return {
    type: SEARCH_STUDENTS,
    payload: filter,
  };
};

export const refreshListStudents = () => {
  return {
    type: REFRESH_LIST_STUDENTS,
  };
};
