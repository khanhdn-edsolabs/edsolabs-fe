import {
  REFRESH_LIST_STUDENTS,
  SAVE_ALL_STUDENTS,
  SEARCH_STUDENTS,
} from 'constant/studentAction';
import { countingAge } from 'utils/dob';

const initialState = {
  listStudents: [],
  listStudentsFiltered: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ALL_STUDENTS: {
      return {
        ...state,
        listStudents: action.payload,
        listStudentsFiltered: action.payload,
      };
    }

    case SEARCH_STUDENTS: {
      let newListFilter = [...state.listStudents];
      const { filterAge, filterName, filterGender } = action.payload;

      if (filterName.trim() !== '') {
        newListFilter = newListFilter.filter((s) =>
          s.full_name.toLowerCase().includes(filterName.toLowerCase())
        );
      }

      if (filterAge.trim() !== '') {
        newListFilter = newListFilter.filter((s) => {
          return countingAge(s.dob) === Number.parseInt(filterAge);
        });
      }

      if (filterGender.trim() !== '') {
        newListFilter = newListFilter.filter(
          (s) => s.gender.toLowerCase() === filterGender.toLowerCase()
        );
      }

      return {
        ...state,
        listStudentsFiltered: newListFilter,
      };
    }

    case REFRESH_LIST_STUDENTS: {
      const newList = [...state.listStudents];
      return { ...state, listStudentsFiltered: newList };
    }

    default:
      return state;
  }
};

export default studentReducer;
