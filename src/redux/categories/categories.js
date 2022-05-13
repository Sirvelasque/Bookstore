const CHECKSTATUS = 'CHECKSTATUS';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({ type: CHECKSTATUS });
